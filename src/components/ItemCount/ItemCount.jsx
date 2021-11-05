import React, {useState} from "react";
import "./itemCount.css"




const ItemCount = ({initial, stock}) =>
{   
    const [count , setCount] = useState (1);
    const [buttonAction, setButtonAction] = useState("addToCart");

    // ------------- ItemCount inicio-----------------
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
    // ------------- ItemCount Fin-----------------
   
    // ------------- Intercambiabilidad inicio-----------------
   
    const ButtonAddToCart = () =>  
    {
        const addToCartFinally = ()=>
        {
            
            count === 1 ? alert(`Se han agregado ${count} producto al carrito`) : 
            alert(`Se han agregado ${count} productos al carrito`)
    
        }
        return(
        <button className="btnGeneral" onClick={addToCartFinally}>Agregar al carrito</button>
        )
    }

    const ButtonGoToCart = () =>
    {
        return ( <button className="btnGeneral" onClick={() => alert("yendo al carrito")}>Ir a mi carrito</button>)
    }
    const handleButton = () =>
    {
        setButtonAction("goToCart")
    }
    // ------------- Intercambiabilidad Fin----------------

    return(
            <div className="buttonCartWidgetBox">    
                <button className="buttonCartW" onClick = {removeCartWidget}>
                    -
                </button>
                <div className="countBox">
                    <p>{count}</p>
                    <div onClick={handleButton}>
                        {
                        buttonAction ===  "addToCart" ?
                        <ButtonAddToCart/> 
                        :
                        <ButtonGoToCart/>
                        }
                    </div>
                </div>
                <button className="buttonCartW" onClick = {addCartWidget}>
                    +
                </button>
            </div> 
    )
}

export default ItemCount