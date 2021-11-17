import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import ItemDetail from "./ItemDetail/ItemDetail";
import  getFirestore from "../../Services/getFirestore"
// import getFetchICD  from "../../Services/getFetch"



const ItemDetailContainer = () =>
{
    // Creo mi hook seteado en un array vacio
    const [productDetail, setProductDetail] = useState({});
    const [loadingItemDetail, setLoadingItemDetail] = useState(true);

    const {id}  = useParams(); //Parametro que uso para buscar mi objeto

    useEffect(()=>
    {
        const db = getFirestore();
        const dbQuery = db.collection("items").doc(id).get();//PORQUE DOC CON EL PARAMETRO ID. 
        dbQuery
        .then( resp => setProductDetail({id: resp.id, ...resp.data()}))
        .catch(err => alert(`Error: ${err}`))
        .finally(()=> setLoadingItemDetail((false)))
             
    },[])
    // console.log(productDetail)
    return(
        <>
            {loadingItemDetail ? <h3>Cargando información</h3> : <ItemDetail productDetail={productDetail}/>}
        </>
    )
}

export default ItemDetailContainer