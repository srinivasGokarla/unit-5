import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { addTodoError, addTodoLoading, addTodoSuccess, getTodoError, getTodoLoading, getTodoSuccess ,deleteTodo} from "../store/actions"

export const Todos=()=>{
    const [text,setText] = useState("")
     const {todos,loading,error} = useSelector((state)=> ({ todos: state.todos,loading:state.loading,error:state.error}))
    // console.log(todos)
     const dispatch = useDispatch()

useEffect(()=>{
    getTodo()
},[])

const getTodo =()=>{
    dispatch(getTodoLoading())
    axios.get('http://localhost:3001/todos')
    .then(function (response) {
      // handle success
     // console.log(response.data);
      dispatch(getTodoSuccess(response.data))
    })
    .catch(function (error) {
      // handle error
      //console.log(error);
      dispatch(getTodoError(error))
    })
   
}

    return loading?(<div>...Loading</div>):error?(<div>something is wrong </div>):  <div>
      <h3 style={{
          color: 'blue'
      }}>Todo List</h3>

      <input value={text} type="text"  placeholder="Enter todo" onChange={(e)=>setText(e.target.value)}/>
      <button style={{
        color:  "white",
        backgroundColor: "green",
        marginLeft:"5px",
        borderRadius: "4px"
      }}
           onClick={()=>{
             dispatch(addTodoLoading())
            axios.post('http://localhost:3001/todos', {
                title: text,
                status: false
              })
              .then(function (response) {
                console.log(response.data);
                dispatch(addTodoSuccess(response.data))
              })
              .catch(function (error) {
                console.log(error);

                dispatch(addTodoError(error))
              });



           }}
       >ADD</button>
       {todos.map((e,i )=> <div style={{
         border:"1px solid grey",
         padding: "20px",
         margin : "20px",
       }} key={i}>
         
         <div>{e.title}</div>
         <div> status:{ !e.status ? " false" :" true"}</div>
          <Link to={`/todos/${e.id}`}><button style={{
        
        backgroundColor: "yellow",
        marginLeft:"5px",
        borderRadius: "4px"
      }}  >EDIT</button></Link>
          <button style={{
        color:  "white",
        backgroundColor: "red",
        marginLeft:"5px",
        borderRadius: "4px"}}
            onClick={()=>{
                // console.log(deleteTodo(e.id))
                // dispatch(deleteTodo(e.id))
                axios.delete(`http://localhost:3001/todos/${e.id}`)
                .then(function (response) {
                  // handle success
                  console.log(response.data);
                //  dispatch(getTodoSuccess(response.data))
                getTodo()
                })
                .catch(function (error) {
                  // handle error
                  console.log(error);
                 // dispatch(getTodoError(error))
                })
              
              }}
          >DELETE</button>
       </div>)}
    </div>
}