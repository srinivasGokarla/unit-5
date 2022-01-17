import { useState } from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import {  addFormLoading , addFormSuccess , addFormError} from "../FEATURE/Admin/action"
const axios = require('axios');


const Admin =()=>{
 
    const {loading ,jobs,error } = useSelector((state)=>({
        loading : state.loading,
        jobs : state.jobs ,
        error : state.error
    }))
    const dispatch = useDispatch()

    const [form,setForm] = useState({
        status : false
    })
    
    const handleChange =(e)=>{
        console.log(e.target.value,e.target.name)
        const {name,value} = e.target
        setForm({...form,[name]:value })
    }

   const handleSubmit = (e)=>{
    e.preventDefault()

         console.log(form)
          dispatch(addFormLoading())
         axios.post('http://localhost:3001/jobs', form)
          .then(function (response) {
            console.log(response.data);
            dispatch(addFormSuccess(response.data))
          })
          .catch(function (error) {
            console.log(error);
            dispatch(addFormError(error))
          });


   }

    return  loading ? (<div>Loading...</div>) : error ? (<div>Somthing went wrong</div>):<div>
        <h1>Admin</h1>
        <div>
        
            <label>Name : </label>
            <input name="name" type="text" placeholder="Company Name" onChange={handleChange}/>
            <br/>
            <br/>
            <label>Job Title : </label>
            <input name="title" type="text" placeholder="job title" onChange={handleChange}/>
            <br/>
            <br/>
            <label>Salary Range: </label>
            <input name="Salary" type="Number" placeholder="salary" onChange={handleChange}/>
            <br/>
            <br/>
            <label>Description of title:</label>
            <input name="description" type="text" placeholder="description" onChange={handleChange}/>
            <br/>
            <br/>
            <label>Location</label>
            <input name="location" type="text" placeholder="location" onChange={handleChange}/>
            <br/>
            <br/>
           <button onClick={handleSubmit}>Submit</button>
        
        </div>
       
    </div>
}

export {Admin}