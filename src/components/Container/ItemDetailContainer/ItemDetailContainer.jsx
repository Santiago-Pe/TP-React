import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import ItemDetail from "../../ItemDetail/ItemDetail";
import { getFetchDetail } from "../../services/getFetch"

const ItemDetailContainer = () =>
{
    const [productDetail, setProductDetail] = useState([]);
    // const {id} = useParams()
    useEffect(()=>
    {
        getFetchDetail
        .then( resp =>
        {
            setProductDetail(resp)
        })
        .catch(err => console.log(err))
        .finally(()=> console.log("Todos los datos se han cargado"))
        

    }, []);
    console.log(productDetail)


    
    return(
        <>
        <ItemDetail product={productDetail}></ItemDetail>
        </>
    )
        
}

export default ItemDetailContainer