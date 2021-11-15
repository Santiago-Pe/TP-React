import { useCartContext } from "../../CartContext/CartContext";

const Cart = () =>
{
    const {cartList, removeItemCart, cleanCart, calculateCumulativePrice} = useCartContext()
    return(
        <div className="containerCart">
            {cartList.length > 0 ?
                <div>
                    <button className="btnCleanCart" onClick={() => cleanCart()}>Vaciar carrito</button> 
                    <label>{`Su precio acumulado: ${calculateCumulativePrice()}`}</label>
                </div>
            : 
                <div className="textCartempty">
                    <h3>Carrito de compras</h3>
                    <p>No hay productos actualmente en tu carrito.</p>
                    <p>Ve a ver nuestros productos</p>
                    <button>Ver productos</button>
                </div>    
            }
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
                </div>
                )
            } 
            {/* Aca vamos a insertar intercambiabilidad */}
           
       
        </div>
    )
}
export default Cart