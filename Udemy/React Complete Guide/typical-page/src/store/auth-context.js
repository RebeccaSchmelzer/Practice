import React, { useState, useEffect } from "react";

//ac is object that contains component
//now provide in the app, so that the others can listen
////so 125 we now have the entire state managed here
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
  });
  
  export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    useEffect(() => {
      const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
  
      if (storedUserLoggedInInformation === '1') {
        setIsLoggedIn(true);
      }
    }, []);
  
    const logoutHandler = () => {
      localStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
    };
  
    const loginHandler = () => {
      localStorage.setItem('isLoggedIn', '1');
      setIsLoggedIn(true);
    };
  
    return (
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          onLogout: logoutHandler,
          onLogin: loginHandler,
        }}
      >
        {props.children}
      </AuthContext.Provider>
    );
  };
  
  export default AuthContext;