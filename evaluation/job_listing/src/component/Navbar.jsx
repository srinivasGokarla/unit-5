import  {Link } from "react-router-dom"
const Navbar = () => {
   
    return (
        <div style={{
            display:"flex",
            justifyContent: "space-around",
            border: '1px solid black',
            padding: "1%",
            color:"#20a2df",
            backgroundColor: "#e7e1e3"
        }} >
            <Link to="/"><div>Home</div></Link>
            <Link to="/admin">
                
            <div>Admin</div>
            </Link>
            <Link to="/applyjob"><div>Login</div></Link>
            <Link to="/login"><div>Applyjob</div></Link>



        </div>
    )
}
export {Navbar}