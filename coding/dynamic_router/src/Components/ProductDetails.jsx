
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
export const ProductDetails =()=>{
 const {id} = useParams();

 const [data, setData] = useState([])
 useEffect(() => {
     fetchData();
   },[]); 
   const fetchData =()=>{
     fetch(`http://localhost:3001/products/${id}`).then(res=>res.json()).then(res => setData(res));
   } 
   console.log(data);
    return (<>
    <h1>Product detail page</h1>
    <h2 style={{margin:'10px',color:'blue'}}>Product</h2>
        {
         Object.keys(data).map((key, index) =>(
                <h4 key={index}><span className="key_Product">{key}</span>: <span className="values_Product">{data[key]}</span></h4>
         ))
        }
    </>)
}