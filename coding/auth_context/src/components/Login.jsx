import {AuthContext} from '../contexts/Auth_Context'
import { useState, useContext } from 'react';

export const Login = ()=>{
    const [data, setData] = useState({});
    const handleChange = (e)=>{
        let {name, value} = e.target;
        setData({
            ...data, [name] : value
        })
    }
const {handleLogin, token} = useContext(AuthContext)
    const handleClick = (e)=>{
        e.preventDefault()
        handleLogin(data.email, data.password)
    }
    if(token){
        return(
            <div>
                <h1>Logged in Successfully</h1>
                <h2>Token : {token.token}</h2>
            </div>
        )
    }
  
    return(
        <div>
            <h1>User Login</h1>
            <form onSubmit={handleClick}>
                <input placeholder="Email" name="email" type="email" onChange={handleChange} />
                <br/>
                <input placeholder="Password" type="text" name="password" onChange={handleChange} />
                <br/>
                <input type="submit" />
            </form>
        </div>
    )
}