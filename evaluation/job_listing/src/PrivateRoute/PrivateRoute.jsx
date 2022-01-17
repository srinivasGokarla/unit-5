import { useContext } from "react"
import { AuthContext } from "../Context/Token"
import { Navigate ,Route} from "react-router-dom"

export const PrivateRoute = ({children })=>{

    const {Token} = useContext(AuthContext)

    if(!Token){
        return <Navigate to={"/Login"}/>
    }

    return children
}