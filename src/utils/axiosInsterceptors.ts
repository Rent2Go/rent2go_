import { string } from 'yup';
import { jwtDecode } from 'jwt-decode';
import axios from "axios";
import { TokenUser } from '../models/token/TokenUser';
import { number } from 'yup';

import { decreaseRequestCount, increaseRequestCount } from '../store/slices/loadingSlice';
import store from '../store/store';
import TokenService from '../services/TokenService';

const axiosInstance = axios.create({
	baseURL: "http//localhost:8080/api/",
});


axiosInstance.interceptors.request.use(
	async (config) => {
		store.dispatch(increaseRequestCount())

		const token = TokenService.getToken()

		if (token) {
			const decode = jwtDecode<TokenUser>(token);
			const x: number = 1000;
			const expirationDate = new Date(decode.exp).getTime() * x;
			const nowDate = new Date().getTime();
		



			if (expirationDate <= nowDate) {
				
				try {
					const localRefreshToken = TokenService.getRefreshToken("refreshToken")
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
		store.dispatch(decreaseRequestCount())

		return Promise.resolve(response)
	},
	(error) => {
		store.dispatch(decreaseRequestCount())
		return Promise.reject(error);
	}



);

export default axiosInstance;