import axios from "axios";
import { response } from "express";
import { request } from "http";

const axiosInstance = axios.create({
	baseURL: "http://localhost:8080/api/",
});

axiosInstance.interceptors.request.use(request => {
	

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
		
		return Promise.resolve(response);
	},
	error => {
		return Promise.reject(error);
	},
);

export default axiosInstance;