import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
const axios = require('axios');
const Applyjob =()=>{

     const [mainjobs ,setMainjob ] = useState(null)

    const {loading ,jobs,error } = useSelector((state)=>({
        loading : state.loading,
        jobs : state.jobs ,
        error : state.error
    }))

    const dispatch = useDispatch()

    const getjobs =()=>{
        axios.get('http://localhost:3001/jobs')
            .then(function (response) {
          // handle success
             console.log("res", response.data);
             setMainjob(response.data)
              })
             .catch(function (error) {
             // handle error
            console.log(error);
            })
      }

      useEffect(()=>{
          getjobs()
      },[])


    return<div>
        <h1>Applyjob</h1>
         {mainjobs?.map((el, i)=> 
         
         <div key={i} style={{
             border : "1px solid black",
             padding : "20px",

         }}>
             
             <h3>Job Title : {el?.title}</h3>
             <h5>Comapny Name : {el?.name}</h5>
             <h5>Salary : {el?.Salary} LPA</h5>
             <h5>Job Description : {el?.description} </h5>
             <h5>Location : {el?.location}</h5>
             <button  onClick={()=>{
                 axios.patch('http://localhost:3001/jobs', {
                    name : el?.name,
                    title: el?.title,
                    status: !el?.status,
                    Salary : el?.Salary,
                    description: el?.description,
                    location : el?.location,
                    id: el?.id
                 })
                  .then(function (response) {
                    console.log(response);
                    getjobs()
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
             }}
                 
                  
                  
                 
              >{!el?.status ? "APPLY FOR JOB" : "APPLIED ALREADY"} </button>
         </div>
         //company name, job title, salary range, job description, location,
         
         )}
          
    </div>
}

export {Applyjob}