import {useState,useRef} from "react"

export const Form = () => {
    const[form, setForm] = useState()
    const ref = useRef(null)

    return (
        <form>
        
          <lable>Title</lable>
          <br></br>
          <input />
          <br></br>
          <br></br>

          <lable>Ingrediants</lable>
          <br></br>
          <input />
          <br></br>
          <br></br>
          <lable>Time to Cook</lable>
          <br></br>
          <input />
          <br></br>
          <br></br>
          <lable>Image</lable>
          <br></br>
          <input />
          <br></br>
          <br></br>
          <lable>Instructions</lable>
          <br></br>
          <input />
        </form>
    )
}

