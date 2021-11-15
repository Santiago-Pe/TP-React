import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import ItemDetail from "./ItemDetail/ItemDetail";
import  getFetchICD from "../../Services/getFetch"

const ItemDetailContainer = () =>
{
    // Creo mi hook seteado en un array vacio
    const [productDetail, setProductDetail] = useState([]);
    const [loadingItemDetail, setLoadingItemDetail] = useState(true);

    const {id}  = useParams(); //Parametro que uso para buscar mi objeto
    
    useEffect(()=>
    {
        getFetchICD
        .then( resp =>
        {
           setProductDetail(resp.find(pd => pd.id === id)) //Me busca el objeto por el id y lo setea en producDetail
        })
        .catch(err => alert(`Error: ${err}`))
        .finally(()=> setLoadingItemDetail((false))) //NO FUNCIONA MUY BIEN. NO ME LO CARGA EN EL TIEMPO QUE LO REQUIERO EN MI GETFFETCH
        

    }, [id]);
    return(
        <>
            {loadingItemDetail ? <h3>Cargando información</h3> : <ItemDetail productDetail={productDetail}/>}
        </>
        )
}

export default ItemDetailContainer