import axios from "axios";
import type { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
export const forumBaseURL = process.env.NEXT_PUBLIC_BACKEND_URL_FORUM;

const forumInstance = axios.create({
	baseURL: forumBaseURL,
	withCredentials: true,
})

// Add a request interceptor
forumInstance.interceptors.request.use(
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
forumInstance.interceptors.response.use(
	function (response: AxiosResponse) {
		// Any status code that lies within the range of 2xx cause this function to trigger
		// Do something with response data
		return response;  // Ensure the response is returned
	},
	function (error: AxiosError) {
		// Any status codes that fall outside the range of 2xx cause this function to trigger
		// Do something with response error
		if (error.response && error.response.status === 401) {
			if(window.location.pathname !== '/redirect' && window.location.pathname !== '/login/oauth2/code/auth0') {
				const currentUrl = document.location.href;
				localStorage.setItem("currentUrl", currentUrl);
			}

			if (typeof window !== "undefined") {

				window.location.href = "/redirect";
			}
		}
		return Promise.reject(error);  // Ensure the error is returned
	}
);

if (typeof window !== "undefined") {
	forumInstance.defaults.headers.common = {
	
	};
}

export default forumInstance;
