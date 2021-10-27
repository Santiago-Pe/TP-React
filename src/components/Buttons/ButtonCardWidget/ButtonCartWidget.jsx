import React, {useState} from "react";
import TituloH4 from "../../Ttiles/TitleH4"
import "./buttonCardWidget.css"




const ButtonsCartWidget = ({initial, stock}) =>
{   
    const [count , setCount] = useState (1);

    const addCartWidget = () =>
    {
        if (count == stock)
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
        if(count == initial )
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
        alert(`Se han agregado ${count} de productos al carrito`);
    };

    return(
            <div className="buttonCartWidgetBox">    
                <button className="buttonCartW" onClick = {removeCartWidget}>
                    -
                </button>
                <div className="countBox">
                    <TituloH4 className="titleH4" title={count}/>
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

export default ButtonsCartWidget