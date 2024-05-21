import userInstance from "@/utils/axiosCustomize/user";
import axios from "axios";

export const callLogOut = () => {
	return axios.get('http://backend.electronic24h.site/logout');
}