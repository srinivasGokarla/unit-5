import logo from './logo.svg';
import './App.css';
import {Form} from "./components/form"

function App() {

  return (
    <div className="App">
 <h1>User Details Form</h1>
 
   < Form />
   

    </div>
  );
}

export default App;
/*
1 variable,save it's own state.
2 change in variable, shouldn't cause a re- render
*/
