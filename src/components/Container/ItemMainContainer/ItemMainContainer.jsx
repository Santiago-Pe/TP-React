import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemMainList from "./ItemMainList/ItemMainList";
import getFirestore from "../../Services/getFirestore"

const ItemMainContainer = (props) =>
{
    //HOOKS
    const [loadingItemContainer, setLoadingItemContainer] = useState(true);
    const {idInicio} = useParams ()
    const [products, setProducts] = useState([]);

    useEffect(()=>
    {
        const db = getFirestore();
        const dbQuery = idInicio ? db.collection("items").where("inicio", "==", idInicio).get() : alert("no se cargo el array");
        dbQuery
        .then(resp => setProducts(resp.docs.map(prod => ({id: prod.id, ...prod.data()}) )) )
        .catch(err => alert(`Error: ${err}` ))
        .finally(() => setLoadingItemContainer(false));
    },[idInicio])
//    <ItemListCard products={products}
    return(
        <>
             {loadingItemContainer ? 
                                    <div className="containerLoading">
                                        <div class="lds-ellipsis">
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
