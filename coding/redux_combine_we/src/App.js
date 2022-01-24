
import './App.css';
import {Todos} from './components/Todos';
import { Counter } from "./components/Counter";



function App() {
 // const counter = useSelector((state) => state.counter);
  return (
    <div className="App">
      
 < Counter />
 <hr />
      < Todos />
    

    </div>
  );
}

export default App;
