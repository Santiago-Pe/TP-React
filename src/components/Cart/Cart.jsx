import { useState } from "react";
import { useCartContext } from "../../CartContext/CartContext";
import firebase from 'firebase';
import 'firebase/firestore';
import getFirestore from "../Services/getFirestore";

const Cart = () =>
{
    //HOOKS
    const [orderId, setOrderId] = useState("");
    const {cartList, removeItemCart, cleanCart, calculateTotalPriece} = useCartContext();
    const [formData, setFormData] = useState(
        {
            nombre: "",
            telefono: "",
            email: ""
        }
    )

    //FUNCIONES
    const creatOrder = (e) => 
    {
        e.preventDefault()
        
            let order = {}
            order.date = firebase.firestore.Timestamp.formDate(new Date());
            order.buyer =  formData;
            order.total = calculateTotalPriece();
            order.items= cartList.map(cartItem => 
                {
                    const id = cartItem.id;
                    const nombre = cartItem.nombre;
                    const precio = cartItem.precio;
                    return{id, nombre, precio}
                }
            )
        const dbQueryForm = getFirestore();
        dbQueryForm.collection("orders").add(order)
        .then(resp => setOrderId(resp.id))
        .catch(err => alert('Error:', err))
        .finally(() =>cleanCart())
    }
    const handleChange = (e) => 
    {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    console.log(formData)
    return(
        <div className="containerCart">
            {cartList.length
            ?
                <div>
                    <button className="btnCleanCart" onClick={() => cleanCart()}>Vaciar carrito</button>
                </div>
            :   
                orderId === ""
            ?
                <div className="textCartempty">
                    <h3>Carrito de compras</h3>
                    <p>No hay productos actualmente en tu carrito.</p>
                    <p>Ve a ver nuestros productos</p>
                    <button>Ver productos</button>
                </div>
            :  
                <div>
                    <p>Gracias por tu compra</p> 
                    <p>Tu codigo de compras es: {orderId}</p>
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
            <label>{`Su precio acumulado: ${calculateTotalPriece()}`}</label>
            <h3>Completar los datos para finalizar la compra</h3> 
            <form onChange={handleChange} onSubmit={creatOrder}>
                <input type="text" name="nombre" placeholder="Ingrese su nombre completo" value={formData.nombre} />
                <input type="number" name="telefono" placeholder="Ingrese su numero de telefono" value={formData.telefono} />
                <input type="email" name="email" placeholder="Ingrese su email (ejemplo@gmail.com)" value={formData.email}/>
                <button>Comprar</button>
            </form>
        </div>
    )
}
export default Cart