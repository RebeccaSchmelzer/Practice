import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from '@reduxjs/toolkit'
//wrapper to allow access to the store, set store to ur store
import { Provider } from 'react-redux';
import userReducer from "./features/user"
import themeReducer from "./features/user"


//create a store to contain all states that you want to change
//configure store allows u to create the store, init it.
//pass info that is a collection of reducers - built into redux 
//store contains all reducers that will be used in the app
const store = configureStore({
  //set it to empty obj bc u dont have reducers yet
  //reducer is a function that takes in some info about current states, 
  //so takes in prev value of the state, and it also takes in an action that u wanna perform on the state
  //and returns the new value of the state
  //so u define reducers for all diff states in app to manage and change them
  //we need a user state -> so when u login u access the user state, data appears -> so we need a user reducer

  //import the userreducer, just a name and put it in a user component
  reducer: {
    user: userReducer,
    theme: themeReducer
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
