import { configureStore } from '@reduxjs/toolkit'

// import editEmployeeReducer from "./slices/editEmployee.slice"
import {
  cellReducer1,
  cellReducer2, 
  cellReducer3,
  cellReducer4,
  cellReducer5,
  cellReducer6,
  cellReducer7,
  cellReducer8,
  cellReducer9,


} from "./slices/cell.slice"

import {  
  userReducer1,
  userReducer2,} from "./slices/user.slice"

const reducer = {
  
//   editEmployee: editEmployeeReducer
cellReducer1: cellReducer1,
cellReducer2: cellReducer2,
cellReducer3: cellReducer3,
cellReducer4: cellReducer4,
cellReducer5: cellReducer5,
cellReducer6: cellReducer6,
cellReducer7: cellReducer7,
cellReducer8: cellReducer8,
cellReducer9: cellReducer9,
userReducer1: userReducer1,
userReducer2: userReducer2,
  
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})
export default store;