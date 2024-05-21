"use client"

import RedirectLoginPage from "@/components/redirectLoginPage";
import axios from "axios";
import {useEffect, useState} from "react";
import {callFetchUser} from "@/apis/user/user.api";
// import {jwtDecode} from "jwt-decode";

// const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtaW5ocXVhbmhvYW5nMDQwMTAzQGdtYWlsLmNvbSIsIlJPTEUiOiJVU0VSIiwiTkFNRSI6Ik1pbmggUXVhbiBIb2FuZyIsIlBJQ1RVUkUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NLWDl4cFJYcGZBZHF4UXBqbGRDb1V1eGF2S3JZdkpLVV81TXMzSXN2aF92RnVVS2c9czk2LWMiLCJpYXQiOjE3MTYwMzMwNTcsImV4cCI6MTcxNjAzMzY1N30.K9oMOPT5Wwti9ared2Td0r9L3-N5jO9rz__KD1gILWbrKOxrnc1FaLyjjL7U0S9H52Beqyv-OK-nHH_yquuWOA"
// const decoded = jwtDecode(token);

const UserPage = () => {
	const [shouldRedirect, setShouldRedirect] = useState(false)
	const getMe = async() => {
		const res = await callFetchUser()
			.then((res) => {
			// window.location.href = res.data.redirectUrl;
			console.log("check fetch: ", res);
			localStorage.setItem("userId", res.data.id);
		})
			.catch((err) => {
				console.error(err);
				setShouldRedirect(true);
			})
		console.log(res);
	}
	
	useEffect(() => {
		getMe();
		// console.log(decoded);
	}, []);
	
	// const shouldRedirect: boolean = res?.status === 401
	// const shouldRedirect = false;
	// console.log(shouldRedirect)
	
	// const data = await res.json();
	// console.log(res.status);
	
	
	return (
		<>
			user page
			<RedirectLoginPage shouldRedirect={shouldRedirect}/>
		</>
	)
}

export default  UserPage;