
import NavBar from "./NavBar.jsx/NavBar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import './App.css'
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Checkout from "./Checkout/Checkout";

import { CartProvider } from "./context/CartContext";
import Cart from "./Cart/Cart";


function App() {
  
  return (
    
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="*" element={<h1>ERROR</h1>}/>
            
          </Routes>
        </CartProvider>
      </BrowserRouter>

    </div>
    
  );
}

export default App
