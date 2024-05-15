"use client"

import { useEffect} from "react";
import axios from "axios";
import {Spin} from "antd";
interface RedirectLoginPageProps {
	shouldRedirect: boolean;
}

const RedirectLoginPage: React.FC<RedirectLoginPageProps> = ({ shouldRedirect }) => {
	const currentUrl = document.location.href;
	localStorage.setItem("currentUrl", currentUrl);
	
	useEffect(() => {
		const getRedirectUrl = async () => {
			axios.get(`${process.env.NEXT_PUBLIC_REDIRECT_LOGIN_URL}`, {
				withCredentials: true,
			})
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
	
	return <Spin tip={"Bạn đang được chuyển hướng về trang đăng nhập ..."} size={"large"} style={{
		
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		
	}}/>;
};

export default RedirectLoginPage;
