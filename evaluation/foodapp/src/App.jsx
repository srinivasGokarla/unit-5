import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {useEffect} from "react/cjs/react.development"


function App() {
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
    <div className="App">
    <h1>Food App</h1>
    <div className="big">
    
    <div  className="left">
      <h2>Add a Recipe</h2>
     
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
    <div className="right">
    {test.map((e,i) => (
          <div key={i}>{e.title}</div>
          ))}
    </div>
    <div  className="bottom">
    <img  width="100%" height="100%" src ="https://foodish-api.herokuapp.com/images/pizza/pizza44.jpg" />
    </div>
    
    </div>
    </div>
  );
}

export default App;
