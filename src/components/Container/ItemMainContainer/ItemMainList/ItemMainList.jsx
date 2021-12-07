import { memo } from "react";
import ItemMain from "./ItemMain/ItemMain";

const  ItemMainList = memo ( 
    ({products}) =>
    {
        console.log(products)
        return(
            <div className="">
                 {products.map(prod=> <ItemMain key={prod.id} prod={prod}/>) }        
            </div>
        )
    }

)

   


export default ItemMainList