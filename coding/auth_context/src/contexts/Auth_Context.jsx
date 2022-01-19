import { createContext, useState } from "react";

export const AuthContext = createContext() //type

export const AuthContextProvider = ({children})=>{
 const [token, settoken] = useState('');

 const handleLogin = (email, password)=>{
    fetch('https://reqres.in/api/login',{
         method : "POST",
         headers : {
            "content-type" : "application/json"
        },
         body : JSON.stringify({email, password})
    })
    .then((req)=>req.json())
    .then(res=>{
        settoken(res)
    })
 }

 const handleToken = ()=>{
     if(token) {
         settoken()
     console.log("Logged out")
     }
 }

 const value = {token, handleLogin, handleToken}
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}