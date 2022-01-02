import {useState, useRef} from "react"



export const Form = () => {
    const[form, setForm] = useState({
        username : "",
        age : "",
        address : "",
        department : "",
        salary : "",
        ismarried : ""
    });
    const ref = useRef(null)
    const handleChange = (e) => {
        console.log(ref.current.files)
       // console.log(e.target.name, e.target.value)
        let { name, value, checked, type } = e.target;
        value = type === "checkbox" ? checked : value
      setForm({
          ...form,
          [name] : value,

      })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form)
    }


    return (
        <form onSubmit={ handleSubmit }>
     
       
        <label>Name</label>
        <input name="username" onChange={handleChange} type = "text" placeholder = "Enter your name"/>
        <br/>
        <br/>
        <label>Age</label>
        <input name="age" onChange={handleChange} type = "number" placeholder = "Enter your age"/>
        <br/>
        <br/>
        <label>Address</label>
        <input  name="address" onChange={handleChange} type = "text" placeholder = "Enter your address"/>
        <br/>
        <br/>
        <label>Department</label>
        <select  name="department" onChange={handleChange} >
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
        <input  name="salary" onChange={handleChange} type = "Number" placeholder = "Enter your salary"/>
        <br/>
        <br/>
        <label>Married</label>
        <input  name="ismarried" onChange={handleChange} type = "checkbox" value ="ismarried" />
        <br/>
        <br/>
        <input ref={ref} onChange={handleChange} type = "file" />
        <br/>
        <br/>
        
        <input type="submit" value="submit" />
        {/* {form.map((e,i) => (
            <div key = {i} >{e.name}</div>
        ))} */}

    </form>
    
    )
}