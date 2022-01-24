
 import {useSelector, useDispatch} from 'react-redux'
 import {addcount} from '../features/counter/action'

 export const Counter = () =>  {
  const counter = useSelector(state=>state.counter)
   const dispatch = useDispatch()
  return (
    <div >
      <h1>Counter : {counter}</h1>
       <button onClick={()=>{
        dispatch(addcount(1))

     }} >ADD 1</button>
      
     </div>
  );
 }


