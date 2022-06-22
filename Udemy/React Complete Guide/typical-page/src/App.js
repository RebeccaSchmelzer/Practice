import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //we dont wanna run this directly in the component function
  //this is executed by react, AFTER every component reevaluation
  //so whenever this component function runs, this will run
  //and is you update the state in here, the component will run again
  //but, will not nrunafter every component reeval, but only if the depens change like when the app starts for the first time, that means the depens change from nothing to having them
  //so this should only run when the app starts
  //so this updates the state and triggers the component function to run again
  // but effect would only run again if the depens change which they wont bc its empty
  useEffect(() => {
    const storedInfo = localStorage.getItem('isLoggedIn')

    if (storedInfo === '1') {
      setIsLoggedIn(true)

    }
  }, []);


  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways

    //store this when user clicks the button
    localStorage.setItem('isLoggedIn', '1')
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn")
    setIsLoggedIn(false);
  };

    //provider for context is wrapped around everything
    //and take out react fragment
    //listen thru hook or consumer in Nav.js
    // and u need to mention the data here
    //now updated by react whenever updated and passed to whomever is listening
  return (
    
      <AuthContext.Provider value={{
        isLoggedIn: isLoggedIn,
        //every listening component will be able to use the onlogout
        onLogout: logoutHandler
      }}>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </AuthContext.Provider >
    
  );
}

export default App;
