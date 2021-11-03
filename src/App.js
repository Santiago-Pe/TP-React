import {BrowserRouter, Switch, Route} from "react-router-dom"
import NavBar from "./components/NavBar/NavBar";
import Inicio from "./components/Inicio/Inicio";
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
            <Inicio/>
            <ItemListContainer/> 
             {/*Poner el ItemListContainer en otro lado y solo mostrar 3 cards  */}
            
          </Route> 
          <Route excat path="/categoria/:id"  exact component={ItemListContainer}/>   
          <Route exact path="/detalle/:id" component={ItemDetailContainer}/>   
        </Switch>  
        {/* Footer */}
      </BrowserRouter>
  
    </>
  );
}

export default App;
