import {useSelector, useDispatch} from "react-redux";
import { addcounter} from "./store/actions"
  
  export const Counter = () => {
    const  counter = useSelector((state) => state.counter);
    const dispatch = useDispatch( )

    return (
        <div>
             <h1>Counter: {counter}</h1>
     <button onClick={() => {
     dispatch(addcounter(1))
    }}
    >Add 1</button>
      <button onClick={() => {
     dispatch(addcounter(-1))
    }}
    >decrement 1</button>
        </div>
    )
  }