import {useState} from "react";
import {useEffect} from "react/cjs/react.development"

export const Form = () => {
    const[text, setText] = useState("")
    const[test, setTest] = useState([])
  
    useEffect(() => {

    })
    const getRecipe = () => {
        fetch("http://localhost:3001/Recipe").then(d => d.json()).then(res => {
            setTest(res)
        })
    }
    const addRecipe = () => {
        const payload = {
            title : text,
            ingrediants : text,
            timetocook : text,
            image : text,
            instructions : text,
        }
        fetch("http://localhost:3001/Recipe", {
            method : "POST",
            body: JSON.stringify(payload),
            headers: {
                "content-type": "application/json"
            }
        }).then(() => {
            getRecipe()
            setText("")
        })
    }

    return (
        
            <div>
        
          <lable>Title</lable>
          <br></br>
          <input  onChange={(e) => setText(e.target.value)} type="text" name="title" placeholder="Enter Recipe Name" />
          <br></br>
          <br></br>

          <lable>Ingrediants</lable>
          <br></br>
          <input onChange={(e) => setText(e.target.value)} type="text" name="ingrediants" placeholder="Enter the Ingrediants" />
          <br></br>
          <br></br>
          <lable>Time to Cook</lable>
          <br></br>
          <input  onChange={(e) => setText(e.target.value)} type="number" name="timetocook" placeholder="Enter the Time" />
          <br></br>
          <br></br>
          <lable>Image</lable>
          <br></br>
          <input  onChange={(e) => setText(e.target.value)} type="text" name="image" placeholder="Enter image url" />
          <br></br>
          <br></br>
          <lable>Instructions</lable>
          <br></br>
          <input  onChange={(e) => setText(e.target.value)} type="text" name="instructions" placeholder="Enter the Instructions" />
          <br></br>
          <br></br>
          <button onClick={ addRecipe }>Submit</button>
         
        </div>
    )
}

