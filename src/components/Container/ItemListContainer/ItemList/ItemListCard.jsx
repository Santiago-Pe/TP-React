import ItemCard from "../Item/ItemCard";
import "./itemCardList.css"

function ItemListCard ({product})
{
    return(
        
        <div className="containerGeneralCard">
            {product.map(prod=> <ItemCard key={prod.id} prod={prod}/>) }           
        </div>
    )
}

export default ItemListCard