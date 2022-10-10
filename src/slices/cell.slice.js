import {createSlice} from "@reduxjs/toolkit";

function createGenericSlice(sliceName) {
    const initialState = {
        ['pressed' + sliceName] : false,

    }

    const cellSlice = createSlice({
        name: 'cell' + sliceName,
        initialState,
        reducers: {
            setPressed: (state, action) =>{
                return {
                    ['pressed' + sliceName] : true
                }
            },
        },
    })
    const {reducer, actions} = cellSlice;
    const {setPressed} = actions;
    return {setPressed, reducer}
}

let slice = []

for(let i=1; i<=9; i++){
    slice[i] = createGenericSlice(String(i))
}

const setPressed1 = slice[1].setPressed
const cellReducer1 = slice[1].reducer

const setPressed2 = slice[2].setPressed
const cellReducer2 = slice[2].reducer

const setPressed3 = slice[3].setPressed
const cellReducer3 = slice[3].reducer

const setPressed4 = slice[4].setPressed
const cellReducer4 = slice[4].reducer

const setPressed5 = slice[5].setPressed
const cellReducer5 = slice[5].reducer

const setPressed6 = slice[6].setPressed
const cellReducer6 = slice[6].reducer

const setPressed7 = slice[7].setPressed
const cellReducer7 = slice[7].reducer

const setPressed8 = slice[8].setPressed
const cellReducer8 = slice[8].reducer

const setPressed9 = slice[9].setPressed
const cellReducer9 = slice[9].reducer

export {
    setPressed1,
    setPressed2,
    setPressed3,
    setPressed4,
    setPressed5,
    setPressed6,
    setPressed7,
    setPressed8,
    setPressed9,
    cellReducer1,
    cellReducer2,
    cellReducer3,
    cellReducer4,
    cellReducer5,
    cellReducer6,
    cellReducer7,
    cellReducer8,
    cellReducer9,
}