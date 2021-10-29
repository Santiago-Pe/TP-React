// import Detail from "./Detail"
import ButtonCartWidget from "../Buttons/ButtonCardWidget/ButtonCartWidget"

const ItemDetail = ({productDetail}) =>
{

    return(
       <>
            {
                productDetail.find(prodDetail =><div key={prodDetail.id === "1"} className="containerProdDetail">
                    
                                                    <div className="prodDetailImgBox">
                                                        {prodDetail.img}
                                                    </div>
                                                    <div className="prodDetailTextBox">
                                                        <h3>{prodDetail.class}</h3>
                                                        <h4>{prodDetail.name}</h4>
                                                        <p>{prodDetail.description}</p>
                                                        <p>{prodDetail.precio}</p>
                                                    </div>
                                                    <div>
                                                        <ButtonCartWidget/>
                                                    </div>
                                                </div>
                )
            }
       </>
    )
}

export default ItemDetail