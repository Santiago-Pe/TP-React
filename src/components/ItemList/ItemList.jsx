import Item from "../Item/Item";

function ItemList ({product})
{
    return(
        <div className="containerGeneralCard">
        {  
            product.map(prod=> <Item key={prod.id} prod={prod}/>)             
        }    
        </div>)
}

export default ItemList