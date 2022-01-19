import { Link } from "react-router-dom"
export const Navbar = ()=>{
    return (
       <div >
      <div className='navbar' style={{
    display: 'flex',
    justifyContent: "space-around",
    border: '1px solid grey',
    padding: '1%',
    fontSize: '18px',
    fontWeight: "600"

}}>
          <Link to='/' style={{textDecoration: 'none' ,alignItems:'center'}}>Home</Link>
          <Link to='/products'style={{textDecoration: 'none'}}>Products</Link>
     
       </div>
       </div>
  
    )
}