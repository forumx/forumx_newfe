'use client'
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";


const Auth0Page = async(props) => {
	const backend = 'http://localhost:8080';
	 console.log("check prop: ", props);
	 useEffect(() => {
		axios.get(`${backend}/login/oauth2/code/auth0`, {
			params: {
				code: props.searchParams.code,
				state: props.searchParams.state
			},
			withCredentials: true
		}).then((res) => {
			console.log("check res: ", res);
		}).catch((error) => {
			console.log("check error: ", error);
		})
	}, [])
		
	return (
		<>
		
		</>
	)
}

export default Auth0Page