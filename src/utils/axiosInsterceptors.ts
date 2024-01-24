import axios from "axios";
import { request } from "http";

const axiosInstance = axios.create({
	baseURL: "http://localhost:8080/api/",
});

axiosInstance.interceptors.request.use(request => {
	console.log("sending request..");

	//request.headers.Authorization = "Bearer "+localStorage.getItem("token");
	

	return Promise.resolve(request)
},

error => {
	return Promise.reject(error);
},


);

axiosInstance.interceptors.response.use(
	response => {
		//...
		console.log(response.status);

		return response;
	},
	error => {
		return error;
	},
);

export default axiosInstance;