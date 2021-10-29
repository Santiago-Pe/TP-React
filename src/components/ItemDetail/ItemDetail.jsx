// import Detail from "./Detail"
import ButtonCartWidget from "../Buttons/ButtonCardWidget/ButtonCartWidget"

const ItemDetail = (productDetail) =>
{

    return(
       <>
        {productDetail.find(productDetail => productDetail== "1")}
        <div key={productDetail.id} className="containerProdDetail">
            <div className="prodDetailImgBox">
                {productDetail.img}
            </div>
            <div className="prodDetailTextBox">
                <h3>{productDetail.class}</h3>
                <h4>{productDetail.name}</h4>
                <p>{productDetail.description}</p>
                <p>{productDetail.precio}</p>
            </div>
            <div>
            <ButtonCartWidget/>
            </div>
        </div>
       </>
    )
}

export default ItemDetail