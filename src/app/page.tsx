import Image from "next/image";
import axios from "axios";

const Home = async() => {
	// await axios.post("http://localhost:8080/api/renewJwt")
	// 	.then(res => console.log(res))
	// 	.catch(err => console.log(err));
	
  return (
	  <p style={{color: "white", fontWeight: "bold", fontSize: "30px", textAlign: "center"}}>Welcome to ForumX</p>
  );
}

export default Home;