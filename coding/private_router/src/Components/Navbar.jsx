import { Link } from "react-router-dom"

export const Navbar = () =>{
    const style = {
        "display" : "flex",
        "justifyContent": "space-evenly",
        "margin" : " 10px auto",
         "border": "1px solid gray",
        "padding" : "10px",
        "textDecoration" : "none",
        "fontSize" : "22px",
          "fontWeight" : "600",

        
    }
    return(
        <div style={style}>
       <Link to="/" >Home</Link>
    
       <Link to='/userlist' >Users List</Link>
       <Link to='/login' >Login</Link>
        </ div>
    )
}