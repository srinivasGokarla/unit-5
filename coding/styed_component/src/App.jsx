import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import {Button, Div} from  "./styled/Button";
import {useState} from "react"


function App() {
  const[theme, setTheme] = useState("light")
  return (
    <div className="App">
   <h1> Hello Rect</h1>
   <Button  theme={theme} onClick={() =>  {
     console.log("Clicked!!")
   }}
   >Click me
    </Button>
    <button onClick={() => { setTheme(theme)}}>toggle theme</button>
    <Div>
     <p> Testing</p>
    </Div>
   
  
    </div>
  );
}

export default App;
