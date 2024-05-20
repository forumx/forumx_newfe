import axios from "axios";
import type { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

export const userBaseURL = process.env.NEXT_PUBLIC_BACKEND_URL_USER;
export const forumBaseURL = process.env.NEXT_PUBLIC_BACKEND_URL_FORUM;

const userInstance = axios.create({
	baseURL: userBaseURL,
});

const forumInstance = axios.create({
	baseURL: forumBaseURL,
})

// Add a request interceptor
userInstance.interceptors.request.use(
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
userInstance.interceptors.response.use(
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
	userInstance.defaults.headers.common = {
		withCredentials: true
	};
}

export default userInstance;
