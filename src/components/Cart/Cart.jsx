import { useCartContext } from "../../CartContext/CartContext";

const Cart = () =>
{
    const finalllyBuy = () =>
    {   
        
        console.log ("Su compra ha sido finalizada")
    }
    const {cartList, removeItemCart, cleanCart} = useCartContext()
    return(
        <div className="containerCart">
            {cartList.map(itemCardList =>  
                <div key={itemCardList.id} className="boxInfoTotalCart">
                    <div className="boxImgCart">
                        <img src={itemCardList.img} alt={`Imagen de ${itemCardList.nombre}`} />
                    </div>
                    <div className="boxInfoCart">
                        <h4>{itemCardList.clase}</h4>
                        <p><b>Nombre:</b> {itemCardList.nombre}</p>
                        <p><b>Cantidad:</b> {itemCardList.cantidad}</p>
                        <p><b>Precio:</b> ${itemCardList.precio}</p>
                    </div>
                    <button className="btnRemoveItemCart" onClick={removeItemCart}>Eliminar producto de carrito</button>
                </div>
                )
            } 
        <button className="btnCleanCart" onClick={cleanCart}>Vaciar carrito</button>
        </div>
    )
}
export default Cart