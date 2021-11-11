import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemListCard from "./ItemList/ItemListCard";
import getFetch from "../../Services/getFetch"

const ItemListContainer = (props) =>
{
    //Seteo mi product en un array vacio
    const [product, setProduct] = useState([]);
    //Seteo mi estado loading en true
    const [loading, setLoading] = useState(true);

    const {id} = useParams ()

    useEffect (()=>
    {
        if(id)
        {
            //Filtro mi array traido con getFetch por los Id segun su categoria. Y lo seteo en product (que era un array vacio)
            getFetch
                .then( res =>
                    {
                    console.log('Llamada a la API')
                    setProduct(res.filter(prod => prod.categoria === id))
                    }
                )
                .catch(err => alert(`Error: ${err}` ))
                .finally(() => setLoading((false))) //Cuando finalize mi getFetch cambia mi estado de lodaing a "false"
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
//Retorno un Estado loading que mientras sea true muestre el title  y cuando finalize mi get fetch lo convierta a false y  muestre los productos
    return(
        <>
            {loading ? <h3 className="titleH3">Cargando..</h3> : <ItemListCard product={product} />}
        </>    
    )
}

export default ItemListContainer




