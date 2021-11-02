import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import ItemDetail from "./ItemDetail/ItemDetail";
import { getFetchDetail } from "../../services/getFetch"

const ItemDetailContainer = () =>
{
    const [productsDetail, setProductsDetail] = useState([]);
    // const [firstProductDetail, setFirstProductDetail] = useState({});

    const {id}  = useParams();
    
    useEffect(()=>
    {
       
        getFetchDetail
        .then( resp =>
        {
           setProductsDetail(resp.find(pd => pd.id === id))
        })
        .catch(err => alert(`Error: ${err}`))
        .finally(()=> console.log("Todos los datos se han cargado"))
        

    }, [id]);
    return(
        <ItemDetail productDetail={productsDetail}/>
    )
}

export default ItemDetailContainer