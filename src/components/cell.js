import loadable from '@loadable/component';
import { useSelector, useDispatch } from "react-redux";
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
} from "../slices/cell.slice";
import {    
    setActiveUser1, 
    setActiveUser2,

} from "../slices/user.slice";
export default function Cell(props){
    // const [pressed, setPressed] = useState(false);
    const dispatch = useDispatch();
    const  pressed  = useSelector((state) => state['cellReducer' + props.celNum])['pressed'+props.celNum]

    const  activeUser1  = useSelector((state) => state['userReducer1'])['activeUser1']
    const  activeUser2  = useSelector((state) => state['userReducer2'])['activeUser2']

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
        dispatch(setPressed())
        if(activeUser1){
            dispatch(setActiveUser1(false))
            dispatch(setActiveUser2(true))
        }
        if(activeUser2){
            dispatch(setActiveUser1(true))
            dispatch(setActiveUser2(false))
        }

    })
    return(
       
            <div className={pressed ? 'cell pressed' : 'cell'}
                onClick={cellClick}>

            </div>
       
    )
}