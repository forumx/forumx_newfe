"use client"

import userInstance from "@/utils/axiosCustomize/user";
import {useEffect} from "react";
import {callFetchUser} from "@/apis/user/user.api";
import {useDispatch} from "react-redux";
import {getAccountAction} from "@/redux/slices/account";

const FetchAccount = () => {
	const dispatch = useDispatch()
	const getMe = async () => {
		const res = await callFetchUser();
		console.log(res);
		if(res.status === 200) {
			const userResponse = res.data;
			const user = {
				name: userResponse.name,
				id: userResponse.id,
				img_url: userResponse.img_url,
				username: userResponse.username,
				enabled: userResponse.enabled,
			}
			dispatch(getAccountAction(user))
		}
	}
	
	useEffect (() => {
		getMe();
	}, []);
	
	return (
		<></>
	);
};

export default FetchAccount;
