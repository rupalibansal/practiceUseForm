import { createContext, useState } from "react";

// step1. Create the context
export const LoginContext = createContext();
  // step2. Make the context available to the components
const LoginContextProvider = ({ children }) => {
    const [userDetails, setUserDetails] = useState(true);
  return (
    <LoginContext.Provider value={ userDetails}>
      <div>
              { children}
      </div>
    </LoginContext.Provider>
  )
}

export default LoginContextProvider