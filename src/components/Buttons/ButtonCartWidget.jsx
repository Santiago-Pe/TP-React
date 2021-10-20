import React, {useState} from "react";
import IconAdd from "./IconAdd"
import IconRemove from "./IconRemove"
import CartWidget from "../NavBar/CartWidget"
import TituloH4 from "../Ttiles/TitleH4"
import TituloH3 from "../Ttiles/TitleH3"


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
            <TituloH3 className="titleH3" title="Carriot de Carga"/>
            <div className="buttonCartWidgetBox">    
                <button className="buttonCartW" onClick = {addCartWidget}>
                    <IconAdd />
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