// import {BrowserRouter, Switch, Route} from "react-router-dom"
import NavBar from "./components/NavBar/NavBar";
import BannerContainer from "./components/Banner/BannerContainer";
import ItemListContainer from "./components/Container/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/Container/ItemDetailContainer/ItemDetailContainer"
function App() 
{
  return (
    <>
      <NavBar/>  
      <BannerContainer/>
      <ItemListContainer/>     
      <ItemDetailContainer/>
      {/* Footer */}
    </>
  );
}

export default App;
