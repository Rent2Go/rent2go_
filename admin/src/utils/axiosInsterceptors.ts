import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://api.rentogo.com.tr//api/",
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