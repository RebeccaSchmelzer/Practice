//allows u to create a reducer, split logic and access it thru app, easy to change and access
import { createSlice } from "@reduxjs/toolkit";


//contains info on reducer, actions want to take on the state, and actual name of the state
export const userSlice = createSlice({
    //name of the slice, name of the state
    name:"user",
    //initial values
    initialState:{value:{name:"", age:0, email:""}},
    //pass down the functions used to change the values of the app
    reducers: {
        //function 1, login
        //function that creates the user, allows u to change the initial state of the user and add a user
        //state: holds the info about curr and prev val of the state
        //action: object with payload and type
            //payload is object contains info to use when changing state, create a function to change val of var
            //so if u wanna change the value of the user, pass in an object containing new values inside the payload, thats how u access the info
            //type: trigger diff types of actions u wanna take, 
                //so if u pass in a type, to conditionally do diff stuff
        login: (state, action) => {
            //change the state into whatever u get from the payload
            state.value = action.payload
        },
    },
})

//export all the actions u wanna use, so login would be one of those
export const {login} = userSlice.actions

//set init state from session storage or local storage

export default userSlice.reducer;