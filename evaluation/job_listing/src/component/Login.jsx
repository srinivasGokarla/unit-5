import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../Context/Token"



const Login =()=>{

    const navigate = useNavigate()
    const [login,setlogin] = useState({    })
    
    const handleChange =(e)=>{
        console.log(e.target.value,e.target.name)
        const {name,value} = e.target
        setlogin({...login,[name]:value })
    }

   const {handleToken}= useContext(AuthContext)

    return<div>
        <h1>Login</h1>

        <label>Name: </label>
        <input name="Name" type="text"  placeholder="enter name" onChange={handleChange}/>
        <br/>
        <br/>
        <label>Password : </label>
        <input name="Password" type="text" placeholder="enter password" onChange={handleChange}/>
        <br/>
        <br/>
        <button onClick={(e)=>{
             e.preventDefault()
             console.log(login)
          
           if(login.Name === "admin" && login.Password === "admin"){
          
               handleToken("12345")
               navigate("/Admin")
           }else{
               navigate("/Applyjob")
           }

        }}>Submit</button>
    </div>
}

export {Login}