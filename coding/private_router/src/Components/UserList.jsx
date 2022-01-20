import { Link, Navigate, useNavigate,useLocation} from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import { AuthContext } from "../context/AuthContext";
// const {token} = useContext(AuthContext);

export const UserList = () =>{
    const [users, setUsers] = useState([])

    function getUser(){
        fetch('https://reqres.in/api/users')
        .then((res)=>res.json())
        .then((result)=>{
            console.log(result)
            setUsers(result.data)
        })
    }
    useEffect(()=>{
        getUser()
    },[]) 

    // if(!token){
    //     return <Navigate to={"/login"}/>
    // }
    return(
        <div>
        {
            users.map((e)=>(<h2 key={e.id}> <Link to={`/userpage/${e.id}`} >{e.first_name}</Link> </h2>))
        }
        </div>
    )
}