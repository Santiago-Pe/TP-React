import React, {useState} from "react";
import IconAdd from "./IconAdd"
import IconRemove from "./IconRemove"
import CartWidget from "../NavBar/CartWidget"
import TituloH4 from "../Ttiles/TitleH4"

const ButtonsCartWidget = () =>
{   
    const [count , setCount] = useState (0);

    const addCartWidget = () =>
    {
        setCount(count + 1);
    };
    const removeCartWidget = () =>
    {
        setCount(count - 1);
    };

    return(
        <div className ="buttonCWgeneral">
            <h3>Carrito de compras</h3>
            <div className="buttonCartWidgetBox">    
                <button className="buttonCartW" onClick = {addCartWidget}>
                    <IconAdd/>
                </button>
                <div className="countBox">
                    <CartWidget className="cartWidget black sizeM"/>
                    <hr />
                    <TituloH4 className="titleH4" title={count}/>
                </div>

                <button className="buttonCartW" onClick = {removeCartWidget}>
                    <IconRemove/>
                </button>
            </div>
        </div>    
    )
}

export default ButtonsCartWidget