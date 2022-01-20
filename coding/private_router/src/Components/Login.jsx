import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

export const Login = () =>{
    const [form, setForm] = useState({})
    const navigate = useNavigate()
     const {token, handleToken} =  useContext(AuthContext);

    const handleChange = ({target : {name, value}}) =>{
        setForm({...form, [name] : value})
    }
    const handleClick = ()=>{
        handleToken("12345") //set token to authContext
        navigate(-1)  //send to previous page
    }
    return(
        <div>
        <h2>Login</h2>
        <input name="email" onChange={handleChange} type="text" placeholder="Email" />
        <br />
        <input name="password" onChange={handleChange} type="text" placeholder="Passowrd" />
        <br />
        <button onClick={handleClick}>Login</button>
        </ div>
    )
}