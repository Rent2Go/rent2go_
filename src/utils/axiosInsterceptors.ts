import axios from "axios";
import { jwtDecode } from 'jwt-decode';

import { TokenUser } from '../models/token/TokenUser';

import store from '../store/store';
import { decreaseRequestCount, increaseRequestCount } from '../store/slices/loadingSlice';

import TokenService from '../services/TokenService';

import { string, number } from 'yup';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({


	baseURL: "https://api.rentogo.com.tr/api/",

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

			//----------------------------------------------------------------
			const refreshToken = TokenService.getRefreshToken()
			const decodeRefreshToken = jwtDecode<TokenUser>(refreshToken || '');
			const expirationDateRef = new Date(decode.exp).getTime() * x;
			const nowDateRef = new Date().getTime();




			if (expirationDate <= nowDate) {


				if (expirationDateRef <= nowDate) {

					localStorage.removeItem("token")
					localStorage.removeItem("refreshToken")
					toast.warn("Oturum süresi doldu tekrar giriş yapın.")
					setTimeout(() => {
						window.location.href = "/sign-up";
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
					const response = await axios.post('https://api.rentogo.com.tr/api/refreshtoken', RefreshTokenRequest);
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