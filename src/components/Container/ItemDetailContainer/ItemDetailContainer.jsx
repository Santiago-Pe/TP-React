import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import ItemDetail from "./ItemDetail/ItemDetail";
import  getFirestore from "../../Services/getFirestore"

const ItemDetailContainer = () =>
{
    // Creo mi hook seteado en un array vacio
    const [productDetail, setProductDetail] = useState([]);
    const [loadingItemDetail, setLoadingItemDetail] = useState(true);

    const {id}  = useParams(); //Parametro que uso para buscar mi objeto
    
    // useEffect(()=>
    // {
    //     getFetchICD
    //     .then( resp =>
    //     {
    //        setProductDetail(resp.find(pd => pd.id === id)) //Me busca el objeto por el id y lo setea en producDetail
    //     })
    //     .catch(err => alert(`Error: ${err}`))
    //     .finally(()=> setLoadingItemDetail((false))) //NO FUNCIONA MUY BIEN. NO ME LO CARGA EN EL TIEMPO QUE LO REQUIERO EN MI GETFFETCH
        

    // }, [id]);
    useEffect(()=>
    {
        const db = getFirestore();
        const dbQuery = db.collection("items").get();
        dbQuery


        .then(resp => setProductDetail(resp.docs.map(prod => ({id: prod.id, ...prod.data()}) )))
        // .then(() => setProductDetail(productDetail.find(pd => pd.id === productDetail.id)))
        .catch(err => alert(`Error: ${err}`))
        .finally(()=> setLoadingItemDetail((false)))
        setProductDetail(productDetail.find(pd => pd.id === productDetail.id))
        
    },[id])
    console.log(productDetail)
    return(
        <>
            {loadingItemDetail ? <h3>Cargando información</h3> : <ItemDetail productDetail={productDetail}/>}
        </>
        )
}

export default ItemDetailContainer