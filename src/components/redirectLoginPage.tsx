"use client"

import { useEffect, useState } from "react";
import instance from "@/utils/axiosCustomize";
import axios from "axios";

const RedirectLoginPage = ({ shouldRedirect }) => {
	const [redirectUrl, setRedirectUrl] = useState(null);
	
	useEffect(() => {
		const getRedirectUrl = async () => {
			axios.get(`${process.env.NEXT_PUBLIC_redirectLoginURL}`)
				.then((res) => {
					window.location.href = res.data.redirectUrl;
					console.log(res);
				})
				.catch((err) => {
					console.error(err);
				})
		};
		
		if (shouldRedirect) {
			getRedirectUrl();
		}
	}, [shouldRedirect]);
	
	return <div>redirect</div>;
};

export default RedirectLoginPage;
