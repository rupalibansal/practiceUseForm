import { useContext } from "react";
import { LoginContext } from "../context/LoginContextProvider";

const SinglePost = () => {
    const login = useContext(LoginContext);
    console.log(login);
    return (
      
        <div>SinglePost</div>
        
  )
}

export default SinglePost