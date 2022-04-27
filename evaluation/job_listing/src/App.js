import './App.css';
import { Navbar } from './Component/Navbar';
import {Home } from "./Component/Home"
import { Admin } from './Component/Admin';
import { Applyjob } from './Component/Applyjob';
import { Login } from './Component/Login';
import { Routes,Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      
       <Navbar/>
<Routes>
      <Route path="/" element={ <Home/>} ></Route>
      <Route path="/admin" element={ 
        <PrivateRoute>
             <Admin/>
      </PrivateRoute>
      }></Route>
      <Route  path="/Applyjob" element={ <Applyjob/>}></Route>
      <Route path="/Login"  element={ <Login/>}></Route>
</Routes>
      
    </div>
  );
}

export default App;