import { createSlice } from "@reduxjs/toolkit";

function createGenericSlice(sliceName) {
    const initialState = {
        ['activeUser' + sliceName] : false,
    }

    const userSlice = createSlice({
        name: 'user' + sliceName,
        initialState,
        reducers: {
            setActiveUser: (state, action) => {
                
                state['activeUser' + sliceName] = action.payload
                
            }
        },
    })
    const {reducer, actions} = userSlice;
    const {setActiveUser} = actions;
    return {setActiveUser, reducer}
}

let slice = []

for(let i=1; i<=2; i++){
    slice[i] = createGenericSlice(String(i))
}

const setActiveUser1 = slice[1].setActiveUser
const userReducer1 = slice[1].reducer

const setActiveUser2 = slice[2].setActiveUser
const userReducer2 = slice[2].reducer

export {
    setActiveUser1,
    setActiveUser2,
    userReducer1,
    userReducer2
}