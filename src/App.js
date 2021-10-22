import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ListContainer/ItemListContainer";
import ComponentePromise from "./components/Promises/ComponentePromise";

function App() 
{
  return (
    <div className="Nav">
      <NavBar/>  
      <ItemListContainer/>
      <ComponentePromise/>
    </div>
  );
}

export default App;
