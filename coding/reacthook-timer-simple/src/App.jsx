import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {Timer} from './components/Timer'

function App() {
  const[show, setShow] = useState(true)
  return (
    <div className="App">
      <h1>Use Effect</h1>
      {show ?  <Timer /> : null}
   <button onClick={() => setShow(!show)}>{show ? "Hide": "Show"}</button>
     
    </div>
  );
}

export default App;
