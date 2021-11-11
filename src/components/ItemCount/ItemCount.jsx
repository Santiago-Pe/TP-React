import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./itemCount.css"




const ItemCount = ({initial, stock, onAdd}) =>
{   
    //Contador === count
    const [count , setCount] = useState (initial);
    //Cambiador de boton (intercambiabiabilidad)
    const [buttonChange, setButtonChange] = useState(true);


    // ------------- Aumentar count -----------------
    const handlerAdd = () =>
    {
        if (count === stock)
        {
            return stock
        }
        else
        {
            setCount(count + 1);
        }
      
    };
      // ------------- Disminuir count -----------------
    const handlerRemove = () =>
    {
        if(count === initial )
        {
            return initial
        }
        else
        {
            setCount(count - 1);
        }    
    };
  
   
    // -------- Boton agregar al carrito ----------
    const ButtonAddToCart = () =>  
    {
        // ----- Mensaje aclaratorio de si se agrega 1 o mas productos --------
        const messageAddToCart = ()=>
        {
            
            count === 1 ? alert( `Se han agregado ${count} producto al carrito`) : 
            alert(`Se han agregado ${count} productos al carrito` )
    
        }
        return ( <button className="btnGeneral" onClick={messageAddToCart}>Agregar al carrito</button> )
    }

    //--------- Boton ir al carrito ----------

    const ButtonGoToCart = () =>
    {
        return ( <button className="btnGeneral">Ir a mi carrito</button> )
    }
    //------- Manejo de botones --------
    const handleButton = () =>
    {
        onAdd(count) // Guardo mi valor de count
        setCount(0) //Seteo en valor inicial mi count
        setButtonChange(false) //Cambio booleano que habilita el boton "Ir a mi carrito"
    }

    return(
            <div className="buttonCartWidgetBox">    
                <button className="buttonCartW" onClick = {handlerRemove}>
                    -
                </button>
                <div className="countBox">
                    <p>{count}</p>
                    <div onClick={handleButton}>
                        { buttonChange ? <ButtonAddToCart/> : <Link to={"/cart"}>  <ButtonGoToCart/>  </Link> }
                    </div>
                </div>
                <button className="buttonCartW" onClick = {handlerAdd}>
                    +
                </button>
            </div> 
    )
}

export default ItemCount