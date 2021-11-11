import { useCartContext } from "../../CartContext/CartContext";

const Cart = () =>
{
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
                    <button className="btnRemoveItemCart" onClick={() => removeItemCart(itemCardList.id)}>Eliminar producto de carrito</button>
                    <button className="btnRemoveUnityItemCart" 
                        onClick={() => itemCardList.cantidad >= 1 ? itemCardList.cantidad - 1 : alert("Ya no hay und de productos para eliminar") }>
                        Eliminar  unidad de producto de carrito
                    </button>
                </div>
                )
            } 
            {/* Aca vamos a insertar intercambiabilidad */}
        <button className="btnCleanCart" onClick={() => cleanCart()}>Vaciar carrito</button>
        </div>
    )
}
export default Cart