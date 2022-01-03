import logo from './logo.svg';
import './App.css';
import {Form} from "./components/Form"


function App() {
  return (
    <div className="App">
    <h1>Food App</h1>
    <div className="big">
    
    <div  className="left">
      <h2>Add a Recipe</h2>
      <Form />
    </div>
    <div className="right">
  
    </div>
    <div  className="bottom"></div>
    </div>
    </div>
  );
}

export default App;
