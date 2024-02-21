import Button from "./Button/Button";
import NavBar from "./NavBar.jsx/NavBar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";

function App() {
  
  return (
    <>
          <ItemListContainer greeting={'BIENVENIDOS'}/>

    
      <NavBar/>

      <h2>Productos</h2>
      <Button label="Producto 1"  />
      <Button label="Producto 2" />
      <Button label="Producto 3" />
      <Button label="Producto 4"/>
    
    </>
  );
}

export default App
