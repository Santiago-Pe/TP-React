import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./itemCount.css"




const ItemCount = ({initial, stock, onAdd}) =>
{   
    const [count , setCount] = useState (initial);
    const [buttonChange, setButtonChange] = useState(true);

    // ------------- ItemCount inicio-----------------
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
    // ------------- ItemCount Fin-----------------
   
    // ------------- Intercambiabilidad inicio-----------------
   
    const ButtonAddToCart = () =>  
    {
        const messageAddToCart = ()=>
        {
            
            count === 1 ? alert(`Se han agregado ${count} producto al carrito`) : 
            alert(`Se han agregado ${count} productos al carrito`)
    
        }
        return(
        <button className="btnGeneral" onClick={messageAddToCart}>Agregar al carrito</button>
        )
    }

    const ButtonGoToCart = () =>
    {
        return ( <button className="btnGeneral" onClick={() => alert("yendo al carrito")}>Ir a mi carrito</button>)
    }
    const handleButton = () =>
    {
        onAdd(count)
        setCount(initial)
        setButtonChange(false)
    }
    // ------------- Intercambiabilidad Fin----------------

    return(
            <div className="buttonCartWidgetBox">    
                <button className="buttonCartW" onClick = {handlerRemove}>
                    -
                </button>
                <div className="countBox">
                    <p>{count}</p>
                    <div onClick={handleButton}>
                        {
                        buttonChange ?
                        <ButtonAddToCart/> 
                        :
                        <Link to={"/cart"}>
                            <ButtonGoToCart/>
                        </Link>
                        }
                    </div>
                </div>
                <button className="buttonCartW" onClick = {handlerAdd}>
                    +
                </button>
            </div> 
    )
}

export default ItemCount