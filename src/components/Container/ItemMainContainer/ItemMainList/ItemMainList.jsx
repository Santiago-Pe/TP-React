import { memo } from "react";
import ItemMain from "./ItemMain/ItemMain";
import "./itemMainList.css"
import Hero from "../../../Hero/Hero";
//CSS: lo mismo que en itemCardList

const  ItemMainList = memo ( 
    ({products}) =>
    {
        return(
            <>
            <Hero></Hero>
            <h2 className="mainTitle">LO MAS VENDIDO</h2>
            <div className="containerGeneralCard">
                 {products.map(prod=> <ItemMain key={prod.id} prod={prod}/>) }        
            </div>
            </>
        )
    }

)

   


export default ItemMainList