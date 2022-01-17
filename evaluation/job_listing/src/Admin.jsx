import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"

const Admin  = () => {
    const[form, setForm] = useState({status: false})
    const handleChange = (e) => {
        const {name,value} = e.target;
        setForm({...form,[name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(form)
        dispatch(addFormLoading())
    }
    return (
        <div>
           <lable>Name</lable>
           <input name="name" type="text" placeholder=" Company Name" onChange={handleChange} />
          <br/>
           <br/>
           <lable>Job Title</lable>
           <input name="title" type="text" placeholder=" Job Title" onChange={handleChange} />
           <br/>
           <br/>
           <lable>Salary Range</lable>
           <input name="salary" type="Number" placeholder="salary" onChange={handleChange} />
           <br/>
           <br/>
           <lable>Description of Title</lable>
           <input name="description"  type="text" placeholder="description" onChange={handleChange}/>
           <br/>
           <br/>
           <lable>Location</lable>
           <input name="location"  type="text" placeholder="location" onChange={handleChange} />
           <br/>
           <br/>
           <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export {Admin}