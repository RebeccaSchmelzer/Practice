import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from '@reduxjs/toolkit'
//wrapper to allow access to the store, set store to ur store
import { Provider } from 'react-redux';

//create a store to contain all states that you want to change
//configure store allows u to create the store, init it.
//pass info that is a collection of reducers - built into redux 
//store contains all reducers that will be used in the app
const store = configureStore({
  //set it to empty obj bc u dont have reducers yet
  //reducer is a function that takes in some info about 
  reducer: {}
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
