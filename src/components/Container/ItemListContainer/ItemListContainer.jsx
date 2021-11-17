import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemListCard from "./ItemList/ItemListCard";
import getFirestore from "../../Services/getFirestore"

const ItemListContainer = (props) =>
{
    //Seteo mi product en un array vacio
    const [product, setProduct] = useState([]);
    //Seteo mi estado loading en true
    const [loadingItemContainer, setLoadingItemContainer] = useState(true);

    const {categoria} = useParams ()

    const [products, setProducts] = useState([]);
    useEffect(()=>
    {
        const db = getFirestore();
        const dbQuery = db.collection('items').get(); //Is is PROMISE-> TRAGIGO TODO
        // const dbQuery = db.collection('items').where('precio', '>', 300).get() //TRAIGO CON CONDICION (como filtro)
        dbQuery
        .then(resp => setProducts(resp.docs.map(prod => ({id: prod.id, ...prod.data()}) )) )
        .catch(err => alert(`Error: ${err}` ))
        .finally(() => setLoadingItemContainer(false));
       
      

        //---------Un ejemplo para traer uno solo-------
        // const dbQuery = db.collection('items').doc("5ydOYfho5pHkccOqDcUh").get() //TRAIGO UNO SOLO
        //dbQuery
        // .then(resp => setProduct( {id: resp.id, ...resp.data()} ))
    },[categoria])
   
    
    // console.log(products)

//Retorno un Estado loading que mientras sea true muestre el title  y cuando finalize mi get fetch lo convierta a false y  muestre los productos
    return(
        <>
            {loadingItemContainer ? <h3 className="titleH3">Cargando..</h3> : <ItemListCard products={products} />}
        </>    
    )
}

export default ItemListContainer




