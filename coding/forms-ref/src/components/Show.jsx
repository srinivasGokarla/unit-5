import Form from './Form'
import Table from './Table'
import {useEffect, useState } from 'react'
 
export const  Show = () =>{
    const [formData, setFormData] = useState([])


    const handleSubmit = (data) =>{
      
        fetch("http://localhost:3001/forms",{
            "method" : "POST",
            "headers" : {
                "content-type" :"application/json"
            },
            "body" : JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result => {
            console.log(result)
            handleGet()
        })
    }

    useEffect(() => {
        handleGet()
       
    }, [])
   
    const handleGet =()=>{
        fetch("http://localhost:3001/forms")
        .then(res=>res.json())
        .then(result => {
            setFormData(result)
        })
        console.log('formData', formData)
    }

    return(
        <>
         < Table getdata = {formData} />
       < Form postData = {handleSubmit} />
      
        </>
    )
}

