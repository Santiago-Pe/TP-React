import NavBar from "./components/NavBar/NavBar";
import './components/NavBar/NavBar.css';
import ItemListContainer from "./components/ItemListContainer"

function App() 
{
  return (
    <div className="Nav">
    <NavBar/>  
    <ItemListContainer/> 
    </div>
  );
}

export default App;
