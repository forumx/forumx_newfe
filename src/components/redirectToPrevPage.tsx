"use client"

import {useSearchParams} from "next/navigation";
import axios from "axios";
import {useEffect} from "react";

const RedirectToPrevPage = () => {
	const searchParams = useSearchParams()
	// console.log(searchParams);
	const code = searchParams.get("code");
	const state = searchParams.get("state");
	console.log(document.cookie)
	const redirect = async () => {
		await axios.get(`http://localhost:8080/login/oauth2/code/auth0`, {
			params: {
				code: code,
				state: state,
			},
			withCredentials: true,
			
		})
			.then((response) => {
				if(response.data.status === "success") {
					window.location.href = `${localStorage.getItem("currentUrl")}`;
				}
			console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	}
	
	useEffect(() => {
		redirect();
	}, []);
	
	return (
		<>Redirect ...</>
	)
}

export default RedirectToPrevPage