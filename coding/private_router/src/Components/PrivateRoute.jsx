import {useContext} from 'react'
import { AuthContext } from "../context/AuthContext";
import { Navigate, Route } from "react-router-dom";


export const PrivateRoute = ({children}) =>{
    const {token} =  useContext(AuthContext);

    if(!token){
        return <Navigate to={"/login"} />
    }
    return children
    // <Route path={path} element={element} ></Route>
}