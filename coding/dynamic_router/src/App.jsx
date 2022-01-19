import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home';
import {Products} from './Components/Product'
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { ProductDetails } from './Components/ProductDetails';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>  
        <Route path="/products" element ={<Products />}></Route>
        <Route path='/products/:id' element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
