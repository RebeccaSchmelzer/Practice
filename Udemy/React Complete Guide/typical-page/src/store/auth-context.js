import React from "react";

//ac is object that contains component
//now provide in the app, so that the others can listen
const AuthContext = React.createContext({
    isLoggedIn: false
})

export default AuthContext