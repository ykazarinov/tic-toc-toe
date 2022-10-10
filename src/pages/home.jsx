import { useEffect } from 'react'
import Cell from '../components/cell'
import { useSelector, useDispatch } from "react-redux";
import {    
    setActiveUser1, 
    setActiveUser2,

} from "../slices/user.slice";
export default function Home(){
    const cellCreator = ()=>{
        let cellArr = []
        for(let i = 0; i<9; i++){
            cellArr.push(<Cell key={i} celNum={i+1} />)
        }
        return cellArr
    }

    const dispatch = useDispatch();
    const  activeUser1  = useSelector((state) => state['userReducer1'])['activeUser1']
    const  activeUser2  = useSelector((state) => state['userReducer2'])['activeUser2']

   

    useEffect(()=>{
        dispatch(setActiveUser1(true))
    }, [])

   
    return(
        <div className="cell_container">
           {cellCreator()}
        </div>
    )
}