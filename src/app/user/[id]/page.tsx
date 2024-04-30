import {baseURL} from "@/utils/axiosCustomize";
import RedirectLoginPage from "@/components/redirectLoginPage";

const UserPage = async() => {
	const res = await fetch(`${baseURL}/getMe`, {
		method: "GET"
	});
	
	const shouldRedirect: boolean = res.status === 401
	console.log("check redirect url: ", process.env.redirectLoginURL);
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