import React, {useState} from "react";
import TituloH4 from "../Ttiles/TitleH4"
import TituloH3 from "../Ttiles/TitleH3"



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

    return(
        <div className ="containerButtonCw">
            <TituloH3 className="titleH3" title="Carriot de Carga"/>
            <div className="buttonCartWidgetBox">    
                <button className="buttonCartW btnSimbol" onClick = {removeCartWidget}>
                    -
                </button>
                <div className="countBox">
                    <TituloH4 className="titleH4" title={count}/>
                </div>
                <button className="buttonCartW btnSimbol" onClick = {addCartWidget}>
                    +
                </button>
            </div>
        </div>    
    )
}

export default ButtonsCartWidget