import logo from './logo.svg';
import './App.css';
import {Form} from "./components/Form"
import {Card} from "./components/Card"


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
    <Card />
    </div>
    <div  className="bottom">
    <img  width="100%" height="100%" src ="https://foodish-api.herokuapp.com/images/pizza/pizza44.jpg" />
    </div>
    
    </div>
    </div>
  );
}

export default App;
