import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
export const Products = ()=>{
    const [data, setData] = useState([])
    useEffect(() => {
        fetchData();
      },[]); 
      const fetchData =()=>{
        fetch('http://localhost:3001/products').then(res=>res.json()).then(res => setData(res));
       
      }
      console.log(data);
    return <>
        {data.map((e,i)=>(
            <div key={i} style={{display:'flex',margin:'30px',alignItems:'center', justifyContent: 'center'}}>
             <h2>Product: </h2>     <h4 style={{margin:'10px',color:'blue'}}> {e.name}</h4>
                <Link to={`/products/${e.id}`} style={{textDecoration:'none'}}><button className='btn' style={{color:'white', backgroundColor:'green', borderRadius:'4px'}}>CLICK HERE TO<br/> GET DETAILS</button></Link>
            </div>
        ))}
    </>
}