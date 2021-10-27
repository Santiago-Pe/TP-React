import { useState, useEffect } from "react";
import ItemListCard from "../../ItemList/ItemListCard";
import getFetch from "../../services/getFetch"

const ItemListContainer = (props) =>
{
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true); //este ver que onda

    useEffect (()=>
    {
        getFetch
            .then( res =>
                {
                console.log('Llamada a la API')
                setProduct(res)
                }
            )
            .catch(err => console.log(err))
            .finally(() => setLoading((false)))
    }, [])
        
    return(
        <>
            {loading ? <h3 className="titleH3">Cargando..</h3> : <ItemListCard product={product} />}
        </>    
    )
}

export default ItemListContainer




