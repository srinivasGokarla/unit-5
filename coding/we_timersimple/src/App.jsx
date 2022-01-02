import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {Form} from './components/Form'
import {Todo} from './components/Todo'
import {Timer} from './components/Timer'

function App() {
  const[show, setShow] = useState(true)
  return (
    <div className="App">
    
   <h1>use effect</h1>
   <Form />
   <Todo />
   {show ?  <Timer /> : null}
   <button onClick={() => setShow(!show)}>{show ? "Hide": "Show"}</button>
  
    </div>
  );
}

export default App;
