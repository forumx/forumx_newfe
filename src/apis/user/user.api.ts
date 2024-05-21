import userInstance from "@/utils/axiosCustomize/user";

export const callFetchUser = () => {
	return userInstance.get('/getMe');
}