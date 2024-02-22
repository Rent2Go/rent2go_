
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import TokenService from "../services/TokenService";
import { TokenUser } from "../../../src/models/token/TokenUser";
import { toast } from "react-toastify";

const axiosInstance = axios.create({


	baseURL: "http://localhost:8080/api/",

});


axiosInstance.interceptors.request.use(
	async (config:any) => {
		//store.dispatch(increaseRequestCount())

		const token = TokenService.getToken()

		if (token) {
			const decode = jwtDecode<TokenUser>(token);
			const x: number = 1000;
			const expirationDate = new Date(decode.exp).getTime() * x;
			const nowDate = new Date().getTime();

			//----------------------------------------------------------------
			const refreshToken = TokenService.getRefreshToken()
			const decodeRefreshToken = jwtDecode<TokenUser>(refreshToken || '');
			const expirationDateRef = new Date(decodeRefreshToken.exp).getTime() * x;
			const nowDateRef = new Date().getTime();




			if (expirationDate <= nowDate) {


				if (expirationDateRef <= nowDateRef) {
					
					TokenService.removeToken("token")
					TokenService.removerefreshToken("refreshToken")
					toast.warn("Session has expired, log in again...")
					setTimeout(() => {
						window.location.href = "/sign-in";
					}, 2000)

				}
				else {

					try {
						const localRefreshToken = TokenService.getRefreshToken()
						const RefreshTokenRequest = {
							token: localRefreshToken
						}
						const response = await axios.post('http://localhost:8080/api/refreshtoken', RefreshTokenRequest);
						const { token, refreshToken } = response.data;


						TokenService.setToken(token);
						TokenService.setrefreshToken(refreshToken);


						config.headers.Authorization = `Bearer ${token}`;
					} catch (error) {

						console.error('Error refreshing token:', error);

					}

				}
			}
			else {


				config.headers.Authorization = `Bearer ${token}`;

			}



		}



		return Promise.resolve(config)

	},

	(error:any) => {

		return Promise.reject(error);
	}
);

axiosInstance.interceptors.response.use(
	(response:any) => {
		//store.dispatch(decreaseRequestCount())

		return Promise.resolve(response)
	},
	(error:any) => {
		//store.dispatch(decreaseRequestCount())
		return Promise.reject(error);
	}



);

export default axiosInstance;