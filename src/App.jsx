
import NavBar from "./NavBar.jsx/NavBar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";

import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  
  return (
    
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<h1>ERROR</h1>}/>
        </Routes>
      </BrowserRouter>

    </div>
    
  );
}

export default App
