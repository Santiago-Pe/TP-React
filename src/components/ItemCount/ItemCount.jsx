import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./itemCount.css"




const ItemCount = ({initial, stock, onAdd}) =>
{   
    const [count , setCount] = useState (initial);
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
        onAdd(count)
        setCount(0) 
        setButtonChange(false) 
    }

    return(
        <div className="containerItemCount">
            <div className="containerBtnRemoveAdd">    
                <button className="btnCount" onClick = {handlerRemove}>
                    -
                </button>
                <div className="countBox">
                    <p>{count}</p>
                </div>
                <button className="btnCount" onClick = {handlerAdd}>
                    +
                </button>
            </div>
            <div onClick={handleButton}>
                        { buttonChange ? <ButtonAddToCart/> : <Link to={"/cart"}>  <ButtonGoToCart/>  </Link> }
            </div> 
        </div>    
    )
}

export default ItemCount