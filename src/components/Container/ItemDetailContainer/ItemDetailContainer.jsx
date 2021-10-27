import ItemDetail from "../../ItemDetail/ItemDetail"
import { useState, useEffect } from "react"
import { getFetchDetail } from "../services/getFetch"

const ItemDetailContainer = () =>
{
    const [productDetail, setProductDetail] = useState([]);
    useEffect(()=>
    {
        getFetchDetail
            .then( resp =>
            {
                setProductDetail(resp)
            })
            .catch(err => console.log(err))
            .finally(()=> console.log("Todos los datos se han cargado"))
    }, [])
    
    return(
        <>
        {productDetail.filter(<ItemDetail/>)}
        </>
    )
}

export default ItemDetailContainer