import axios from "axios";

export const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

const instance = axios.create({
	baseURL: baseURL,
});

// Add a request interceptor
instance.interceptors.request.use(
	function (config) {
		// Do something before request is sent
		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	},
);

// Add a response interceptor
instance.interceptors.response.use(
	function (response) {
		// Any status code that lies within the range of 2xx cause this function to trigger
		// Do something with response data
	},
	function (error) {
		// Any status codes that fall outside the range of 2xx cause this function to trigger
		// Do something with response error
	},
);

if (typeof window !== "undefined") {
	instance.defaults.headers.common = {
		withCredential: true
	};
}

export default instance;
