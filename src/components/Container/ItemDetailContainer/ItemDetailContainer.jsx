import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import ItemDetail from "./ItemDetail/ItemDetail";
import  getFirestore from "../../Services/getFirestore"



const ItemDetailContainer = () =>
{
    //HOOKS
    const [productDetail, setProductDetail] = useState({});
    const [loadingItemDetail, setLoadingItemDetail] = useState(true);

    const {id}  = useParams();

    useEffect(()=>
    {
        const db = getFirestore();
        const dbQuery = db.collection("items").doc(id).get();
        dbQuery
        .then( resp => setProductDetail({id: resp.id, ...resp.data()}))
        .catch(err => alert(`Error: ${err}`))
        .finally(()=> setLoadingItemDetail((false)))
             
    },[])
    return(
        <>
            {loadingItemDetail ? <h3>Cargando información</h3> : <ItemDetail productDetail={productDetail}/>}
        </>
    )
}

export default ItemDetailContainer