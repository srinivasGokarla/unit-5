import logo from "./logo.svg";
import "./App.css";
import { Todos } from "./components/Todos";
import { Route, Routes } from "react-router-dom";
import { Details } from "./components/TodosDetails";
import { Total } from "./components/Total";
import { Edit } from "./components/EditTodos";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Todos />}></Route>
        <Route path="/todo/:id" element={<Details />}></Route>
        <Route path="/Total" element={<Total />}></Route>
        <Route path="/todo/:id/edit" element={<Edit />}></Route>
      </Routes>
    </div>
  );
}

export default App;