import {createSlice} from "@reduxjs/toolkit";

function createGenericSlice(sliceName) {
    const initialState = {
        ['pressed' + sliceName] : false,
        ['cellContent' + sliceName] : ''

    }

    const cellSlice = createSlice({
        name: 'cell' + sliceName,
        initialState,
        reducers: {
            setPressed: (state) =>{
                state['pressed' + sliceName] = true
            },
            setCellContent: (state, action) =>{
                state['cellContent' + sliceName] = action.payload
            },
            resetPressed: (state) =>{
                state['pressed' + sliceName] = false
            },
            resetCellContent: (state, action) =>{
                state['cellContent' + sliceName] = ''
            },
        },
    })
    const {reducer, actions} = cellSlice;
    const {setPressed, setCellContent, resetPressed, resetCellContent} = actions;
    return {setPressed, setCellContent, resetPressed, resetCellContent, reducer}
}

let slice = []

for(let i=1; i<=9; i++){
    slice[i] = createGenericSlice(String(i))
}

const setPressed1 = slice[1].setPressed
const setCellContent1 = slice[1].setCellContent
const resetPressed1 = slice[1].resetPressed
const resetCellContent1 = slice[1].resetCellContent
const cellReducer1 = slice[1].reducer

const setPressed2 = slice[2].setPressed
const setCellContent2 = slice[2].setCellContent
const resetPressed2 = slice[2].resetPressed
const resetCellContent2 = slice[2].resetCellContent
const cellReducer2 = slice[2].reducer

const setPressed3 = slice[3].setPressed
const setCellContent3 = slice[3].setCellContent
const resetPressed3 = slice[3].resetPressed
const resetCellContent3 = slice[3].resetCellContent
const cellReducer3 = slice[3].reducer

const setPressed4 = slice[4].setPressed
const setCellContent4 = slice[4].setCellContent
const resetPressed4 = slice[4].resetPressed
const resetCellContent4 = slice[4].resetCellContent
const cellReducer4 = slice[4].reducer

const setPressed5 = slice[5].setPressed
const setCellContent5 = slice[5].setCellContent
const resetPressed5 = slice[5].resetPressed
const resetCellContent5 = slice[5].resetCellContent
const cellReducer5 = slice[5].reducer

const setPressed6 = slice[6].setPressed
const setCellContent6 = slice[6].setCellContent
const resetPressed6 = slice[6].resetPressed
const resetCellContent6 = slice[6].resetCellContent
const cellReducer6 = slice[6].reducer

const setPressed7 = slice[7].setPressed
const setCellContent7 = slice[7].setCellContent
const resetPressed7 = slice[7].resetPressed
const resetCellContent7 = slice[7].resetCellContent
const cellReducer7 = slice[7].reducer

const setPressed8 = slice[8].setPressed
const setCellContent8 = slice[8].setCellContent
const resetPressed8 = slice[8].resetPressed
const resetCellContent8 = slice[8].resetCellContent
const cellReducer8 = slice[8].reducer

const setPressed9 = slice[9].setPressed
const setCellContent9 = slice[9].setCellContent
const resetPressed9 = slice[9].resetPressed
const resetCellContent9 = slice[9].resetCellContent
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
    resetPressed1,
    resetPressed2,
    resetPressed3,
    resetPressed4,
    resetPressed5,
    resetPressed6,
    resetPressed7,
    resetPressed8,
    resetPressed9,
    setCellContent1,
    setCellContent2,
    setCellContent3,
    setCellContent4,
    setCellContent5,
    setCellContent6,
    setCellContent7,
    setCellContent8,
    setCellContent9,
    resetCellContent1,
    resetCellContent2,
    resetCellContent3,
    resetCellContent4,
    resetCellContent5,
    resetCellContent6,
    resetCellContent7,
    resetCellContent8,
    resetCellContent9,
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