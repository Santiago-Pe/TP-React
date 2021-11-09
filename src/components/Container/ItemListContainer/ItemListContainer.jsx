import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemListCard from "./ItemList/ItemListCard";
import getFetch from "../../Services/getFetch"

const ItemListContainer = (props) =>
{
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const {id} = useParams ()

    useEffect (()=>
    {
        if(id)
        {
            getFetch
                .then( res =>
                    {
                    console.log('Llamada a la API')
                    setProduct(res.filter(prod => prod.categoria === id))
                    }
                )
                .catch(err => alert(`Error: ${err}` ))
                .finally(() => setLoading((false)))
        }
        else
        {
            getFetch
            .then( res =>
                {
                console.log('Llamada a la API')
                setProduct(res)
                }
            )
            .catch(err => alert(`Error: ${err}` ))
            .finally(() => setLoading((false))) 
        }    
    }, [id])

    return(
        <>
            {loading ? <h3 className="titleH3">Cargando..</h3> : <ItemListCard product={product} />}
        </>    
    )
}

export default ItemListContainer




