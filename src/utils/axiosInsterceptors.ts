import { jwtDecode } from 'jwt-decode';
import axios from "axios";
import { TokenUser } from '../models/token/TokenUser';
import { number } from 'yup';

const axiosInstance = axios.create({
	baseURL: "http://localhost:8080/api/",
});














axiosInstance.interceptors.request.use(
	async (config) => {

		const token = localStorage.getItem("token")
		
		if (token ) {
		const decode = jwtDecode<TokenUser>(token);
		const x:number = 1000;
			const expirationDate = new Date(decode.exp).getTime()*1000;
			const nowDate = new Date().getTime();
			console.log(nowDate)
			console.log(expirationDate);
			
			

			if (expirationDate <= nowDate) {
				console.log(new Date())
				try {
					const localRefreshToken = localStorage.getItem('refreshToken');
					const RefreshTokenRequest = {
						token:localRefreshToken
					}
					const response = await axios.post('http://localhost:8080/api/refreshtoken', RefreshTokenRequest);
					const { token, refreshToken } = response.data;
					console.log(token)
					// Yeni tokenları sakla
					localStorage.setItem('token', token);
					localStorage.setItem('refreshToken', refreshToken);

					// Yenilenmiş token ile isteği gönder
					config.headers.Authorization = `Bearer ${token}`;
				} catch (error) {
					// Refresh token isteği başarısız olursa, kullanıcıyı çıkış yapmaya yönlendir
					console.error('Error refreshing token:', error);
					// Kullanıcıyı çıkışa yönlendirme veya başka bir işlem
				}
			}
			else {


				config.headers.Authorization = "Bearer " + token;

			}



		}

		

		return Promise.resolve(config)

	},

	(error) => {
		return Promise.reject(error);
	}
);

axiosInstance.interceptors.response.use(
	(response) => {

	return Promise.resolve(response)
 },
 (error) => {

	return Promise.reject(error);
 }


	
);

export default axiosInstance;