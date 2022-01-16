import logo from './logo.svg';
import './App.css';
import {Show} from "./components/Show"

function App() {

  return (
    <div className="App">
 <h1>User Details Form</h1>
 
   < Show />
   

    </div>
  );
}

export default App;
/*
1 variable,save it's own state.
2 change in variable, shouldn't cause a re- render
*/
