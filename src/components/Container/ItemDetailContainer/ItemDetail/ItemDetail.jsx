import {useEffect} from 'react'
// import { Link } from 'react-router-dom'
import ItemCount from "../../../ItemCount/ItemCount"
import "./itemDetail.css"

const ItemDetail = ({productDetail}) =>
{
useEffect(()=>{

    // window.addEventListener("mousemove", () => console.log("Me estoy moviendo"));
//     return () => {

//        window.removeEventListener("mousemove", console.log("Me estoy moviendo"));  
// }
})
    

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
                    <ItemCount initial={1} stock={productDetail.stock}/>
                     
                </div>
            </div>  
       </>
    )
}

export default ItemDetail