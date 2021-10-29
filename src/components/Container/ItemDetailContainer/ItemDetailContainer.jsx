import { useState, useEffect } from "react"
// import { useParams } from 'react-router-dom'
import ItemDetail from "../../ItemDetail/ItemDetail";
import { getFetchDetail } from "../../services/getFetch"

const ItemDetailContainer = () =>
{
    const [productsDetail, setProductsDetail] = useState([]);
    const [firstProductDetail, setFirstProductDetail] = useState({});
    
    useEffect(()=>
    {
        getFetchDetail
        .then( resp =>
        {
            setProductsDetail(resp)
        })
        .catch(err => console.log(err))
        .finally(()=> console.log("Todos los datos se han cargado"))
        

    }, []);
    
    useEffect(()=>
    {
        if(productsDetail && productsDetail.length > 0){
            setFirstProductDetail(productsDetail.find(p => ({id: '1'})))
        }
    }, [productsDetail]);
    
    return(
        <ItemDetail productDetail={firstProductDetail}/>
    )
}

export default ItemDetailContainer