import React from 'react'
import ButtonCartWidget from "../Buttons/ButtonCardWidget/ButtonCartWidget"

const ItemDetail = ({productDetail}) =>
{
    return(
       <>
            <div className="containerProdDetail">
                <div className="prodDetailImgBox">
                   <img src={productDetail.img} alt="Imagen de Jack Daniels Honey" /> 
                </div>
                <div className="prodDetailTextBox">
                    <h3>{productDetail.clase}</h3>
                    <h4>{productDetail.nombre}</h4>
                    <p>{productDetail.descripcion}</p>
                    <p>${productDetail.precio}</p>
                </div>
                <div>
                    <ButtonCartWidget/>
                </div>
            </div>
       </>
    )
}

export default ItemDetail