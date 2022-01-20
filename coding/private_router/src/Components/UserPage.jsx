import { useEffect, useState, useContext } from "react"
import { useParams, Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export const UserPage = () =>{
    const [user, setUser] = useState()
    const {id} = useParams()
     const {token} = useContext(AuthContext);

    function Userdata(){
        fetch(`https://reqres.in/api/users/${id}`)
        .then((res)=>res.json())
        .then((result)=>{
            setUser(result.data)
        })
    }
    useEffect(()=>{
        Userdata()
    },[id]) 

    // console.log(user)
    if(!token){
        return <Navigate to={"/login"} />
    }

    return(
        <div style={{margin:"20px"}}>
        <h2>User details</h2>
      
           {user && 
                <div> 
                    <p>Name: <b> {user.first_name +' ' + user.last_name}</b></p>
                    <p>Email: <b> {user.email}</b></p>
                    <img src={user.avatar} alt="avatarimg"/>
                </div>
            }
        </ div>
    )
}