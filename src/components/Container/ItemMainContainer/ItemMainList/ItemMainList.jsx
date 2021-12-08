import { memo } from "react";
import ItemMain from "./ItemMain/ItemMain";
import "./itemMainList.css"
//CSS: lo mismo que en itemCardList

const  ItemMainList = memo ( 
    ({products}) =>
    {
        return(
            <>
            <h2 className="mainTitle">LO MAS VENDIDO</h2>
            <div className="containerGeneralCart">
                 {products.map(prod=> <ItemMain key={prod.id} prod={prod}/>) }        
            </div>
            </>
        )
    }

)

   


export default ItemMainList