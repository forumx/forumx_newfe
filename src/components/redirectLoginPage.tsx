"use client"

import { useEffect, useState } from "react";
import instance from "@/utils/axiosCustomize";
import axios from "axios";

const RedirectLoginPage = ({ shouldRedirect }) => {
	const [redirectUrl, setRedirectUrl] = useState(null);
	
	useEffect(() => {
		const getRedirectUrl = async () => {
			try {
				const response = await fetch(`${process.env.NEXT_PUBLIC_redirectLoginURL}`);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				if (!data) {
					throw new Error('Missing redirectURI in JSON response');
				}
				console.log("redirectURI: ", data.redirectUrl);
				location.replace(data.redirectUrl);
			} catch (error) {
				console.error('Error fetching redirect URL:', error.message);
				// Xử lý lỗi ở đây (ví dụ: hiển thị thông báo lỗi cho người dùng)
			}
		};
		
		
		if (shouldRedirect) {
			getRedirectUrl();
		}
	}, [shouldRedirect]);
	
	return <div>redirect</div>;
};

export default RedirectLoginPage;
