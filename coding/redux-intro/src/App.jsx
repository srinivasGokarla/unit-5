import './App.css';
import { Todos } from './component/Todo';
import { Route, Routes } from 'react-router-dom';
import { TodoItem } from './component/TodoItem';

function App() {
  return (
    <div className="App">
     <h1>welcome to React - Redux</h1>
     
       < Routes >

        <Route path="/" element={<Todos/>}></Route>
        <Route path="/todos/:id" element={<TodoItem/>}></Route>

      </Routes >
       
    </div>
  );
}

export default App;
