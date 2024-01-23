import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "http://localhost:8080/api/",
});

axiosInstance.interceptors.request.use(config => {
	console.log("sending request..");

	config.headers.Authorization = "MyToken";
	config.headers["Accept-Language"] = "tr";

	return config;
});

axiosInstance.interceptors.response.use(
	response => {
		//...
		console.log("Here is response");

		return response;
	},
	error => {
		console.log(error);
	},
);

export default axiosInstance;