import { memo } from "react";
import ItemCard from "../Item/ItemCard";
import "./itemCardList.css"

const  ItemListCard = memo ( 
    ({products}) =>
    {
        console.log(products)
        return(
            <div className="containerGeneralCard">
                 {products.map(prod=> <ItemCard key={prod.id} prod={prod}/>) }           
            </div>
        )
    }

)

   


export default ItemListCard