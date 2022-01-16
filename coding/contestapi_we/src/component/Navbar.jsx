import {Cart} from "./Cart";
import {useContext} from "react"
import {ThemeContext} from "../contexts/Theme";


export const Navbar = () => {
    const{theme} = useContext(ThemeContext)
    return <div>
     theme is : {theme}
       < Cart />
    </div>
}