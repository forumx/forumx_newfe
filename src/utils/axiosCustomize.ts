import axios from "axios";
import type { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

export const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

const instance = axios.create({
	baseURL: baseURL,
});

// Add a request interceptor
instance.interceptors.request.use(
	function (config: InternalAxiosRequestConfig) {
		// Do something before request is sent
		return config;
	},
	function (error: AxiosError) {
		// Do something with request error
		return Promise.reject(error);
	}
);

// Add a response interceptor
instance.interceptors.response.use(
	function (response: AxiosResponse) {
		// Any status code that lies within the range of 2xx cause this function to trigger
		// Do something with response data
		return response;  // Ensure the response is returned
	},
	function (error: AxiosError) {
		// Any status codes that fall outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject(error);  // Ensure the error is returned
	}
);

if (typeof window !== "undefined") {
	instance.defaults.headers.common = {
		withCredentials: true
	};
}

export default instance;
