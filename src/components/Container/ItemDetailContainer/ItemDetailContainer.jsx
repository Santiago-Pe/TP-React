import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import ItemDetail from "./ItemDetail/ItemDetail";
import  getFetch from "../../Services/getFetch"

const ItemDetailContainer = () =>
{
    // Creo mi hook seteado en un array vacio
    const [productDetail, setProductDetail] = useState([]);

    const {id}  = useParams(); //Parametro que uso para buscar mi objeto
    
    useEffect(()=>
    {
        getFetch
        .then( resp =>
        {
           setProductDetail(resp.find(pd => pd.id === id)) //Me busca el objeto por el id y lo setea en producDetail
        })
        .catch(err => alert(`Error: ${err}`))
        .finally(()=> console.log("Todos los datos se han cargado")) 
        

    }, [id]);
    return(
        <ItemDetail productDetail={productDetail}/>
    )
}

export default ItemDetailContainer