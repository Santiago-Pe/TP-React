import {BrowserRouter, Switch, Route} from "react-router-dom"
import NavBar from "./components/NavBar/NavBar";
import BannerContainer from "./components/Banner/BannerContainer";
import ItemListContainer from "./components/Container/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/Container/ItemDetailContainer/ItemDetailContainer"
function App() 
{
  return (
    <>
      
      <BrowserRouter>
        <NavBar/>  
        <Switch>
          <Route exact path="/">
            <BannerContainer/>
            <ItemListContainer/> 
            
          </Route> 
          <Route excat path="/categoria/:id"  exact component={ItemListContainer}/>   
          <Route exact path="/detalle/:id" component={ItemDetailContainer}/>   
        </Switch>  
      </BrowserRouter>
      {/* Footer */}
    </>
  );
}

export default App;
