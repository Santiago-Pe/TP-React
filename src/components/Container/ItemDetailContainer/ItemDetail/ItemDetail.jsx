import { useCartContext } from '../../../../CartContext/CartContext'
import { useState } from 'react'
import ItemCount from "../../../ItemCount/ItemCount"
import "./itemDetail.css"
import { Link } from 'react-router-dom'


const ItemDetail = ({productDetail}) =>
{
    const [count, setCount] = useState(1); 
    const {addToCart,activeCart} = useCartContext();

    
    //--- Funcion onAdd ---
    const onAdd = (cant)=>
    {
        setCount(cant); 
        addToCart(
                    { 
                        ... productDetail,
                        cantidad: cant,
                    }
                );
        activeCart();         
    }
    
    return(
       <>
            <div className="containerDetail">
                <img className="imgDetail" src={productDetail.img} alt={`Imagen de ${productDetail.nombre}`}/>
                <div className="textDetailBox">
                    <h4>{productDetail.categoria}</h4>
                    <hr />  
                    <p>
                        <b>{productDetail.nombre}</b>
                    </p>
                    <p>
                        <b>{productDetail.detalle}</b>
                    </p>
                    <p>    
                        <b>${productDetail.precio}</b>
                    </p>
                    <p>
                        Averigua todos los tragos que podes armar con unos ricos  
                        <i><a href={productDetail.link} target="en_blank">{productDetail.categoria}</a></i>
                    </p>
                    <p>
                        Encontra los mejores precios en <Link to={"/"}><i><b>Let's Toast</b></i></Link>
                    </p>
                    <hr />    
                    <ItemCount initial={count} stock={productDetail.stock} onAdd={onAdd}/>   
                </div>
            </div>  
       </>
    )
}

export default ItemDetail