import './App.css';
import { Home } from './Components/Home';

import  {Navbar} from './Components/Navbar';

import  {UserList} from './Components/UserList';
import  {Login} from './Components/Login';
import  {UserPage} from './Components/UserPage';
import {Route, Routes } from 'react-router-dom'
import {PrivateRoute} from './Components/PrivateRoute'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes >
        <Route path="/" element={<Home />}> </Route>
        <Route path="/userlist" element={ <PrivateRoute> <UserList /> </PrivateRoute>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/userpage/:id" element={ <UserPage />}></Route>

      </Routes>
     
    </div>
  );
}

export default App;