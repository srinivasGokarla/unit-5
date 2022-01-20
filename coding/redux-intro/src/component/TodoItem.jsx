import { useEffect, useState } from "react"
import { useDispatch ,useSelector} from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom"
import {toggleTodo} from "../store/actions"
const axios = require('axios');


export const  TodoItem=()=>{
    const navigate = useNavigate()
    const {id} = useParams()
    const [user ,setUser] = useState(null)
    const {todos} = useSelector((state)=> ({ todos: state.todos}))
    console.log(todos)
   const dispatch = useDispatch()     


const getSingleTodo =()=>{
    axios.get(`http://localhost:3001/todos/${id}`)
    .then(function (response) {
      // handle success
      console.log("res",response.data);
     setUser(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
 
}
  console.log("user",user)
useEffect(()=>{
    getSingleTodo()
},[])
    
    return <div>

          <h1>todo Item page: {id} </h1>
            <h2>TODO : {user?.title }</h2>
            <h3>STATUS : {user?.status ? "true" : "false"}</h3>
            <button style={{
        color:  "white",
        backgroundColor: "red",
        marginLeft:"5px",
        borderRadius: "4px"}}
            onClick={()=>{
              
                axios.delete(`http://localhost:3001/todos/${id}`)
                .then(function (response) {
                  // handle success
                  console.log(response.data);
                navigate("/")
                })
                .catch(function (error) {
                  // handle error
                  console.log(error);
                })
              
              }}
          >DELETE</button>
          <button style={{
       
        backgroundColor: "yellow",
        marginLeft:"5px",
        borderRadius: "4px"}}
            onClick={()=>{
                axios.patch(`http://localhost:3001/todos/${id}`, {
                title: user?.title,
                status: !user?.status
              })
              .then(function (response) {
                console.log(response.data);
                getSingleTodo()
              })
              .catch(function (error) {
                console.log(error);

               
              });
            }}
          >TOGGLE</button>

           <Link to={"/"}><button style={{
         color: "white",
        backgroundColor: "blue",
        marginLeft:"5px",
        borderRadius: "4px"}} >Back</button></Link> 
    </div>
}