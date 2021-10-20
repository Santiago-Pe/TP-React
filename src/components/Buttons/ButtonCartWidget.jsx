import React, {useState} from "react";
import IconAdd from "./IconAdd"
import IconRemove from "./IconRemove"
import CartWidget from "./CartWidget"

const ButtonsCartWidget = () =>
{   
    const [add , setAdd] = useState (0);
    const [remove , setRemove] = useState (0);

    const addCartWidget = () =>
    {
        setAdd(add + 1);
    };
    const removeCartWidget = () =>
    {
        removeAdd(add - 1);
    };

    return(
        <div className="buttonCartWidgetBox">
            <button onClick = {addCartWidget}>
                <IconAdd/>
            </button>
            <CartWidget/>
            <button onClick = {removeCartWidget}>
                <IconRemove/>
            </button>
        </div>
    )
}

export default ButtonsCartWidget