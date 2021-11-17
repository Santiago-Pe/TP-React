import { memo } from "react";
import ItemCard from "../Item/ItemCard";
import "./itemCardList.css"

const  ItemListCard = memo ( //Con memo, el array en itemListCard solo se renderiza una sola vez, luego independeinte de si hay o no motivo de render, este no se vuelve a redenderizar
    ({products}) => //Paso por props mi array seteado en producst en ItemListContainer
    {
        console.log(products)
        return(
            <div className="containerGeneralCard">
                {/* Metodo map para poder crear mis ItemsCards de todo los prodcutos, pasandolo por props con "prod" */}
                 {products.map(prod=> <ItemCard key={prod.id} prod={prod}/>) }           
            </div>
        )
    }

)







//     ({products}) =>
//     {
//         return(
//             
//             <div className="containerGeneralCard">
//                 {products.map(prod=> <ItemCard key={prod.id} prod={prod}/>) }           
//             </div>
//         )
//     }
    
// )
//     //Paso por props mi array "product"
   


export default ItemListCard