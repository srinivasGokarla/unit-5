import {useState, useRef} from "react"


function Form ({postData})  {
    const[form, setForm] = useState({
        // username : "",
        // age : "",
        // address : "",
        // department : "",
        // salary : "",
        // ismarried : ""
    });
    const ref = useRef(null)

    const handleChange = (e) => {
        let { name, value, checked, type } = e.target;
        console.log(ref.current.files)
       // console.log(e.target.name, e.target.value)
        
        value = type === "checkbox" ? checked : value;
        value = type === "file" ? URL.createObjectURL(ref.current.files[0]) : value;

      setForm({
          ...form,
          [name] : value,

      })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        postData(form)
        console.log(form)
    }


    return (
        <form className="form" onSubmit={ handleSubmit }>
     
       
        <label>Name</label>
        <input name="name" onChange={handleChange} type = "text" placeholder = "Enter your name" required />
        <br/>
        <br/>
        <label>Age</label>
        <input name="age" onChange={handleChange} type = "number" placeholder = "Enter your age" required/>
        <br/>
        <br/>
        <label>Address</label>
        <input  name="address" onChange={handleChange} type = "text" placeholder = "Enter your address" required />
        <br/>
        <br/>
        <label>Department</label>
        <select  name="department" onChange={handleChange} required >
        <option  defaultValue>Select department</option>
  <option value="sales">Sales</option>
  <option value="financial">Fainancial</option>
  <option selected value="default">Default</option>
  <option value="purchasing">Purchasing</option>
  <option value="Human Resource Management">Human Resource Management</option>
  <option value="Accounting">Accounting</option>
</select>
<br/>
<br/>
<label>Salary</label>
        <input  name="salary" onChange={handleChange} type = "Number" placeholder = "Enter your salary" required/>
        <br/>
        <br/>
        <label>Married</label>
        <input  name="ismarried" onChange={handleChange} type = "checkbox" value ="ismarried"  />
        <br/>
        <label for="NotMarried">NotMarried</label>
        <input onChange={handleChange} name="notMarried" type="checkbox" /> 
               
        <br/>
        <br/>
        <input ref={ref} id="file" onChange={handleChange} type = "file" name="photo" />
        <br/>
        <br/>
        
        <input type="submit" value="submit" />
        {/* {form.map((e,i) => (
            <div key = {i} >{e.name}</div>
        ))} */}

    </form>
    
    )
}

export default Form