import {useState} from "react";
import './App.css';

function App() {
  const[count,setCount] = useState(0)
  const handleCounter = () => {
    if(count<= 0) {
      return;
    } else {
      setCount(count - 1);
    }
    
  }
  const Increment = (value) => {
    setCount(count + value)
  }
  const double = () => {
    setCount(count * 2)
  }
  
  return (
    <div className="App">
     <h2>counter: {count}</h2>
     <button  className="button" onClick={ () => Increment(1)} >AddOne</button>
     <button className="redu" onClick={handleCounter}>ReduceOne</button>
     <button className="dobu" onClick={double}>Double</button>
    
    </div>
  );
}

export default App;
