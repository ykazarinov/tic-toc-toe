import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faO } from '@fortawesome/free-solid-svg-icons'
import {    
    setPressed1, 
    setPressed2,
    setPressed3,
    setPressed4,
    setPressed5,
    setPressed6,
    setPressed7,
    setPressed8,
    setPressed9,
    setCellContent1,
    setCellContent2,
    setCellContent3,
    setCellContent4,
    setCellContent5,
    setCellContent6,
    setCellContent7,
    setCellContent8,
    setCellContent9,
} from "../slices/cell.slice";
import {    
    setActiveUser1, 
    setActiveUser2,

} from "../slices/user.slice";
export default function Cell(props){
    const dispatch = useDispatch();
    const  pressed  = useSelector((state) => state['cellReducer' + props.celNum])['pressed'+props.celNum]
    const  cellContent  = useSelector((state) => state['cellReducer' + props.celNum])['cellContent'+props.celNum]

    const  activeUser1  = useSelector((state) => state['userReducer1'])['activeUser1']
    const  activeUser2  = useSelector((state) => state['userReducer2'])['activeUser2']

    const setCellContent = ((cont)=>{ 
        switch(props.celNum){
            case 1: return setCellContent1(cont) 
            case 2: return setCellContent2(cont) 
            case 3: return setCellContent3(cont) 
            case 4: return setCellContent4(cont)
            case 5: return setCellContent5(cont) 
            case 6: return setCellContent6(cont)
            case 7: return setCellContent7(cont) 
            case 8: return setCellContent8(cont)
            case 9: return setCellContent9(cont)
            default: return
        }
       
    })


    const setPressed = (()=>{ 
        switch(props.celNum){
            case 1: return setPressed1() 
            case 2: return setPressed2() 
            case 3: return setPressed3() 
            case 4: return setPressed4()
            case 5: return setPressed5() 
            case 6: return setPressed6()
            case 7: return setPressed7() 
            case 8: return setPressed8()
            case 9: return setPressed9()
            default: return
        }
    })



   
    const cellClick = (()=>{
        
        
        if(activeUser1){
            dispatch(setPressed())
            dispatch(setActiveUser1(false))
            dispatch(setActiveUser2(true))
            dispatch(setCellContent('X'))

           
        }
        if(activeUser2){
            dispatch(setPressed())
            dispatch(setActiveUser1(true))
            dispatch(setActiveUser2(false))
            dispatch(setCellContent('O'))

          
        }

    })


    return(
       
            <div className={
                pressed ? 'cell pressed' : 'cell'}
                onClick={cellClick}
                
                >
                    <FontAwesomeIcon icon={faXmark} className={activeUser1 ? 'el-invisible': 'el-none'} />
                    <FontAwesomeIcon icon={faO} className={activeUser2 ? 'el-invisible': 'el-none'} />
                    {
                        cellContent === 'X' ? <FontAwesomeIcon icon={faXmark} /> : 
                        cellContent === 'O' ? <FontAwesomeIcon icon={faO} /> :
                        null}
            </div>
       
    )
}