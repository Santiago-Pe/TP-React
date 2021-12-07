import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemListCard from "./ItemList/ItemListCard";
import getFirestore from "../../services/getFirestore"

const ItemListContainer = (props) =>
{
    //HOOKS
    const [loadingItemContainer, setLoadingItemContainer] = useState(true);
    const {categoria} = useParams ()
    const [products, setProducts] = useState([]);

    useEffect(()=>
    {  
        const db = getFirestore();
        const dbQuery = categoria ? db.collection("items").where("categoria", "==", categoria).get() : db.collection('items').get();
        dbQuery
        .then(resp => setProducts(resp.docs.map(prod => ({id: prod.id, ...prod.data()}) )) )
        .catch(err => alert(`Error: ${err}` ))
        .finally(() => setLoadingItemContainer(false));
    },[categoria])
   
    return(
        <>  
            {loadingItemContainer ? 
                                    <div className="containerLoading">
                                        <div className="lds-ellipsis">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div> 
                                    </div>    
                                    : <ItemListCard products={products} />}
        </>    
    )
}

export default ItemListContainer




