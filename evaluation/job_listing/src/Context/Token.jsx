import { createContext, useState } from "react"



export const AuthContext = createContext({token: "", handleToken:()=>{}  })


export const AuthContextProvider =({children })=>{
   const [Token,setToken] = useState("")
   const handleToken=(token)=>{
       setToken(token)
   }
    return(
       <AuthContext.Provider value= {{Token , handleToken}}>
           {children}
       </AuthContext.Provider>
    )
}