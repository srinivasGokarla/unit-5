import {useState,useRef} from "react";
import {useEffect} from "react/cjs/react.development"

export const Form = () => {
    const[text, setText] = useState("")
    const[test, setTest] = useState([])
    const ref = useRef(null)
    useEffect(() => {

    })
    const addRecipe = () => {
        
    }

    return (
        <form>
        
          <lable>Title</lable>
          <br></br>
          <input type="text" name="title" placeholder="Enter Recipe Name" />
          <br></br>
          <br></br>

          <lable>Ingrediants</lable>
          <br></br>
          <input type="text" name="ingrediants" placeholder="Enter the Ingrediants" />
          <br></br>
          <br></br>
          <lable>Time to Cook</lable>
          <br></br>
          <input type="number" name="Time to cook" placeholder="Enter the Time" />
          <br></br>
          <br></br>
          <lable>Image</lable>
          <br></br>
          <input type="text" name="image" placeholder="Enter image url" />
          <br></br>
          <br></br>
          <lable>Instructions</lable>
          <br></br>
          <input type="text" name="Instructions" placeholder="Enter the Instructions" />
          <br></br>
          <br></br>
          <button>Submit</button>
        </form>
    )
}

