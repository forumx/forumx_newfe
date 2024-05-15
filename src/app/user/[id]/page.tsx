"use client"

import instance, {baseURL} from "@/utils/axiosCustomize";
import RedirectLoginPage from "@/components/redirectLoginPage";
import axios from "axios";
import {useEffect, useState} from "react";

const UserPage = () => {
	const [shouldRedirect, setShouldRedirect] = useState(false)
    const getMe = async() => {
	    const res = await axios.get(`${baseURL}/getMe`, {
		    
		    withCredentials: true
	    }).then((res) => {
		    // window.location.href = res.data.redirectUrl;
		    console.log("check fetch: ", res);
	    })
		    .catch((err) => {
			    console.error(err);
                setShouldRedirect(true);
		    })
	    console.log(res);
    }
	
	useEffect(() => {
        getMe();
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