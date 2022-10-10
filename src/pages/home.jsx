import { useEffect } from 'react'
import Cell from '../components/cell'
import { useSelector, useDispatch } from "react-redux";
import {    
    setActiveUser1, 
    setActiveUser2,

} from "../slices/user.slice";
import {    
    resetCellContent1,
    resetCellContent2,
    resetCellContent3,
    resetCellContent4,
    resetCellContent5,
    resetCellContent6,
    resetCellContent7,
    resetCellContent8,
    resetCellContent9,
    resetPressed1,
    resetPressed2,
    resetPressed3,
    resetPressed4,
    resetPressed5,
    resetPressed6,
    resetPressed7,
    resetPressed8,
    resetPressed9,
} from "../slices/cell.slice";
export default function Home(){
    const  cellContent1  = useSelector((state) => state['cellReducer1'])['cellContent1']
    const  cellContent2  = useSelector((state) => state['cellReducer2'])['cellContent2']
    const  cellContent3  = useSelector((state) => state['cellReducer3'])['cellContent3']
    const  cellContent4  = useSelector((state) => state['cellReducer4'])['cellContent4']
    const  cellContent5  = useSelector((state) => state['cellReducer5'])['cellContent5']
    const  cellContent6  = useSelector((state) => state['cellReducer6'])['cellContent6']
    const  cellContent7  = useSelector((state) => state['cellReducer7'])['cellContent7']
    const  cellContent8  = useSelector((state) => state['cellReducer8'])['cellContent8']
    const  cellContent9  = useSelector((state) => state['cellReducer9'])['cellContent9']
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

    useEffect(()=>{
        
        if(
            (cellContent1 === 'X' &&  cellContent2 === 'X' && cellContent3 === 'X') ||
            (cellContent4 === 'X' &&  cellContent5 === 'X' && cellContent6 === 'X') ||
            (cellContent7 === 'X' &&  cellContent8 === 'X' && cellContent9 === 'X') ||
            (cellContent1 === 'X' &&  cellContent4 === 'X' && cellContent7 === 'X') ||
            (cellContent2 === 'X' &&  cellContent5 === 'X' && cellContent8 === 'X') ||
            (cellContent3 === 'X' &&  cellContent6 === 'X' && cellContent9 === 'X') ||
            (cellContent1 === 'X' &&  cellContent5 === 'X' && cellContent9 === 'X') ||
            (cellContent3 === 'X' &&  cellContent5 === 'X' && cellContent7 === 'X')

        ){
            alert('Uset 1 (x) win!')
            dispatch(resetCellContent1())
            dispatch(resetCellContent2())
            dispatch(resetCellContent3())
            dispatch(resetCellContent4())
            dispatch(resetCellContent5())
            dispatch(resetCellContent6())
            dispatch(resetCellContent7())
            dispatch(resetCellContent8())
            dispatch(resetCellContent9())

            dispatch(resetPressed1())
            dispatch(resetPressed2())
            dispatch(resetPressed3())
            dispatch(resetPressed4())
            dispatch(resetPressed5())
            dispatch(resetPressed6())
            dispatch(resetPressed7())
            dispatch(resetPressed8())
            dispatch(resetPressed9())
        }else if(
            (cellContent1 === 'O' &&  cellContent2 === 'O' && cellContent3 === 'O') ||
            (cellContent4 === 'O' &&  cellContent5 === 'O' && cellContent6 === 'O') ||
            (cellContent7 === 'O' &&  cellContent8 === 'O' && cellContent9 === 'O') ||
            (cellContent1 === 'O' &&  cellContent4 === 'O' && cellContent7 === 'O') ||
            (cellContent2 === 'O' &&  cellContent5 === 'O' && cellContent8 === 'O') ||
            (cellContent3 === 'O' &&  cellContent6 === 'O' && cellContent9 === 'O') ||
            (cellContent1 === 'O' &&  cellContent5 === 'O' && cellContent9 === 'O') ||
            (cellContent3 === 'O' &&  cellContent5 === 'O' && cellContent7 === 'O')
        ){
            alert('Uset 2 (o) win!')
            dispatch(resetCellContent1())
            dispatch(resetCellContent2())
            dispatch(resetCellContent3())
            dispatch(resetCellContent4())
            dispatch(resetCellContent5())
            dispatch(resetCellContent6())
            dispatch(resetCellContent7())
            dispatch(resetCellContent8())
            dispatch(resetCellContent9())

            dispatch(resetPressed1())
            dispatch(resetPressed2())
            dispatch(resetPressed3())
            dispatch(resetPressed4())
            dispatch(resetPressed5())
            dispatch(resetPressed6())
            dispatch(resetPressed7())
            dispatch(resetPressed8())
            dispatch(resetPressed9())
        }
        
    },[cellContent1, cellContent2, cellContent3, 
        cellContent4, cellContent5, cellContent6,
        cellContent7, cellContent8, cellContent9])

   
    return(
        <div className="cell_container">
           {cellCreator()}
        </div>
    )
}