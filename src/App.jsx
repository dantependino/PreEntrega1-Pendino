import Button from "./Button/Button";
import NavBar from "./NavBar.jsx/NavBar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemCount from "./ItemCount/ItemCount";
import ItemList from "./ItemList/ItemList";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";


function App() {
  
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={'BIENVENIDOS'}/>
      <ItemDetailContainer/>
      
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log ('cantidad agregada ', quantity)}/>

      <h2>Productos</h2>
      <Button label="Producto 1"  />
      <Button label="Producto 2" />
      <Button label="Producto 3" />
      <Button label="Producto 4"/>
    
    </>
  );
}

export default App
