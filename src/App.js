import {BrowserRouter, Switch, Route} from "react-router-dom"
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Container/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/Container/ItemDetailContainer/ItemDetailContainer"
import ItemMainContainer from "./components/Container/ItemMainContainer/ItemMainContainer";
import CartContextProvider from "./CartContext/CartContext";
import Cart from "./components/Cart/Cart"
function App() 
{
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>  
          <Switch>
            <Route excat path="/inicio/:idInicio" component={ItemMainContainer}/>  
            <Route excat path="/categoria/:categoria" component={ItemListContainer}/>   
            <Route exact path="/detalle/:id" component={ItemDetailContainer}/>  
            <Route exact path="/cart" component={Cart}/>
          </Switch>  
        </BrowserRouter>
        </CartContextProvider>
  
    </>
  );
}

export default App;
