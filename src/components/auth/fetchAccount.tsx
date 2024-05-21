"use client"

import userInstance from "@/utils/axiosCustomize/user";
import {useEffect} from "react";
import {callFetchUser} from "@/apis/user/user.api";

const FetchAccount = () => {
	const getMe = async () => {
		const res = await callFetchUser();
		console.log(res);
	}
	
	useEffect (() => {
		getMe();
	}, []);
	
	return (
		<div>
			account
		</div>
	);
};

export default FetchAccount;
