import React, {useState} from "react";
import IconAdd from "./IconAdd"
import IconRemove from "./IconRemove"
import IconCartWidget from "./IconCartWidget"

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
                    <IconCartWidget/>
                    <hr />
                    <h4>{count}</h4>
                </div>

                <button className="buttonCartW" onClick = {removeCartWidget}>
                    <IconRemove/>
                </button>
            </div>
        </div>    
    )
}

export default ButtonsCartWidget