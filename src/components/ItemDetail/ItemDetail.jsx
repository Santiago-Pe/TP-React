import React from 'react'
import ButtonCartWidget from "../Buttons/ButtonCardWidget/ButtonCartWidget"
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
                    <div className="prodDetailText">
                        <h3>{productDetail.categoria}</h3>
                        <h4>{productDetail.nombre}</h4>
                        <p>{productDetail.descripcion}</p>
                        <p>${productDetail.precio}</p>
                    </div>
                    <hr />
                    <div>
                        <ButtonCartWidget initial={1} stock={productDetail.stock}/>
                    </div>
                </div>     
            </div>
       </>
    )
}

export default ItemDetail