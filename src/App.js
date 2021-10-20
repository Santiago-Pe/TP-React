import NavBar from "./components/NavBar/NavBar";
import './components/NavBar/NavBar.css';
import "./components/Buttons/buttons.css"
import ItemListContainer from "./components/ItemListContainer"
import ButtonCartWidget from "./components/Buttons/ButtonCartWidget";
// import ButtonCartWidget from "./components/Buttons/ButtonCartWidget"

function App() 
{
  return (
    <div className="Nav">
    <NavBar/>  
    <ItemListContainer/>
    <ButtonCartWidget/>

    </div>
  );
}

export default App;
