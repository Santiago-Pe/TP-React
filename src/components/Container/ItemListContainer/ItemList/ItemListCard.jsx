import ItemCard from "../Item/ItemCard";
import "./itemCardList.css"

function ItemListCard ({products})//Paso por props mi array "product"
{
    return(
        //Metodo map para poder crear mis ItemsCards de todo los prodcutos, pasandolo por props con "prod"
        <div className="containerGeneralCard">
            {products.map(prod=> <ItemCard key={prod.id} prod={prod}/>) }           
        </div>
    )
}

export default ItemListCard