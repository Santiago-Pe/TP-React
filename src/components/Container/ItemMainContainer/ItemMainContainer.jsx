import { useState, useEffect } from "react";
import ItemMainList from "./ItemMainList/ItemMainList";
import getFirestore from "../../services/getFirestore"

const ItemMainContainer = (props) =>
{
    //HOOKS
    const [loadingItemContainer, setLoadingItemContainer] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(()=>
    {
        const db = getFirestore();
        const dbQuery = db.collection("items").where("inicio", "==", "inicio").get() 
        dbQuery
        .then(resp => setProducts(resp.docs.map(prod => ({id: prod.id, ...prod.data()}) )) )
        .catch(err => alert(`Error: ${err}` ))
        .finally(() => setLoadingItemContainer(false));
    },[])
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
                                    : <ItemMainList  products={products}/>}
        </>    
    )
}

export default ItemMainContainer
