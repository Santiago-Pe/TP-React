import { useCartContext } from '../../../../CartContext/CartContext'
// import { Link } from 'react-router-dom'
import { useState } from 'react'
import ItemCount from "../../../ItemCount/ItemCount"
import "./itemDetail.css"

const ItemDetail = ({productDetail}) =>
{
    const [count, setCount] = useState(0)
    const {cartList, showList} = useCartContext ()
    console.log(cartList);
    console.log(showList);

    const onAdd = (cant)=>
    {
        setCount(cant)
        console.log(cant)
    }
    return(
       <>
            <div className="containerDetail">
                <img className="imgDetail" src={productDetail.img} alt="Imagen de Jack Daniels Honey"/>
                <div className="textDetailBox">
                    <h4>{productDetail.categoria}</h4>
                    <hr />  
                    <p>
                        Marca: <b>{productDetail.nombre}</b>
                    </p>
                    <p>
                        Detalle: <b>{productDetail.detalle}</b>
                    </p>
                        <p>Precio por unidad: <b>${productDetail.precio}</b></p>
                    <p>
                        Averigua todos los tragos que podes armar con unos ricos  
                        <i><a href={productDetail.link} target="en_blank">{productDetail.categoria}</a></i>
                    </p>
                    <p>
                        Encontra los mejores precios en <i><b>Vineria Online</b></i>
                    </p>
                    <hr />    
                    <ItemCount initial={1} stock={productDetail.stock} onAdd={onAdd}/>
                     
                </div>
            </div>  
       </>
    )
}

export default ItemDetail