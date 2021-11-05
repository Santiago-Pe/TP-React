import React, {useState} from "react";
import "./itemCount.css"




const ItemCount = ({initial, stock}) =>
{   
    const [count , setCount] = useState (1);

    const addCartWidget = () =>
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
    const removeCartWidget = () =>
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
    const addToCartFinally = ()=>
    {
        
        count === 1 ? alert(`Se han agregado ${count} producto al carrito`) : 
        alert(`Se han agregado ${count} productos al carrito`)

    };

    return(
            <div className="buttonCartWidgetBox">    
                <button className="buttonCartW" onClick = {removeCartWidget}>
                    -
                </button>
                <div className="countBox">
                    <p>{count}</p>
                    <button className="btnGeneral" onClick={addToCartFinally}>
                        Añadir al Carrito
                    </button>
                </div>
                <button className="buttonCartW" onClick = {addCartWidget}>
                    +
                </button>
            </div> 
    )
}

export default ItemCount