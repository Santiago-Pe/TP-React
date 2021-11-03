import React from 'react'
import { Link } from 'react-router-dom'
import ButtonCartWidget from "../../../Buttons/ButtonCardWidget/ButtonCartWidget"
import "./itemDetail.css"

const ItemDetail = ({productDetail}) =>
{
    return(
       <>
            <div className="containerProdDetail">
                <div className="prodDetailImgBox">
                   <img src={productDetail.img} alt="Imagen de Jack Daniels Honey" className="imgDetail" /> 
                </div>

                <div className="prodDetailBox">
                    <div className="textMapBox">
                        <p className="textMap">
                        <Link className={"linkSpl"} to={"/"}>Inicio</Link> / <Link className={"linkSpl"} to={"/"}>Productos</Link>
                        / <Link className={"linkSpl"} to={"/Vermuts"}>{productDetail.categoria}</Link>
                        </p>
                    </div>  
                    <div className="prodDetailText">
                        <p>Producto: <b>{productDetail.categoria}</b></p>
                        <p>Marca: <b>{productDetail.nombre}</b></p>
                        <p>Detalle: <b>{productDetail.detalle}</b></p>
                        <p>Precio por unidad: <b>${productDetail.precio}</b></p>
                    </div>
                    <div className="prodMktText">
                        <p className="textMkt">
                            <b>Nota:</b> Averigua todos los tragos que podes armar con un rico  
                            <i><a href={productDetail.link} target="en_blank">{productDetail.nombre}</a></i>
                        </p>
                        <p className="textMktTwo">
                            Encontra los mejores precios en <i><b>Vineria Online</b></i>
                        </p>
                        <hr />
                    </div>
                    
                    <div>
                        <ButtonCartWidget initial={1} stock={productDetail.stock}/>
                    </div>
                </div>     
            </div>
       </>
    )
}

export default ItemDetail