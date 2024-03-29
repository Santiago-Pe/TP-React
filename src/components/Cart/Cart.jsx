import { useState } from "react";
import { useCartContext } from "../../CartContext/CartContext";
import { Link } from "react-router-dom";
import {FaTrashAlt} from "react-icons/fa"
import firebase from 'firebase';
import 'firebase/firestore';
import getFirestore from "../services/getFirestore";
import "./cart.css"
const Cart = () =>
{
    //HOOKS
    const [orderId, setOrderId] = useState("");
    const {cartList, removeItemCart, cleanCart, calculateTotalPriece, contVisible} = useCartContext();
    const [formData, setFormData] = useState(
        {
            nombre: "",
            telefono: "",
            email: "",
            emailConfirm: ""
        }
    )
    


    //FUNCIONES
    const creatOrder = () => 
    {
        // e.preventDefault()
        
            let order = {}
            // order.date = firebase.firestore.Timestamp.formDate(new Date());
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
                <div className="containerBtnCleanCart">
                    <button className="btnCleanCart" onClick={() =>cleanCart() }>Vaciar carrito</button>
                </div>
            :   
                orderId === ""
            ?
                <div className="containerEmptyCart">
                    <h3>Carrito de compras</h3>
                    <p>Ups! El carrito esta vacio :(</p>
                    <p>Ve a ver nuestros productos</p>
                    <Link to={"/"}>
                    <button className="btnSeeProd">Ver productos</button>
                    </Link>
                </div>
            :  
            <div className="purchaseCompleted">
                <section>
                    <h3>Gracias por tu compra!</h3>
                    <hr className="hrCart"/> 
                    <p>Tu codigo de compras es: {orderId}</p>
                </section>
            </div>             
            }
            {   
            <div className={contVisible}>
                <table className="containerTable">
                    <thead>
                            <th>Imagen</th><th>Nombre</th><th>Cantidad</th><th>Preio</th><th>Borrar</th>
                    </thead>
                    {cartList.map(itemCardList => 
                        <tr key={itemCardList.id} className="containerCartDetail">
                            <td className="tdImg"><img className="imgCartDetail" src={itemCardList.img} alt={`Imagen de ${itemCardList.nombre}`} /></td>
                            <td className="tdNombre">{itemCardList.nombre}</td>
                            <td className="tdCant">{itemCardList.cantidad}</td>
                            <td className="tdPrecio">${itemCardList.precio}</td>
                            <td className="tdIcon"><FaTrashAlt onClick={() => removeItemCart(itemCardList.id)} className="iconDelet"/></td>   
                        </tr> 
                        )
                    }

                </table>
            </div>   
               
            }
            
            <div className={contVisible}>
                <hr />
                <div className="containerForm">
                    <h3>Completar los datos para finalizar la compra</h3>
                    <label>Total <span>${calculateTotalPriece()}</span></label> 
                    <form 
                    onChange={handleChange} 
                    onSubmit={ (e) =>{
                        e.preventDefault()

                        formData.email === formData.emailConfirm
                            ? creatOrder()
                            : alert("Los correos electrónicos ingresados no son iguales. Intentalo nuevamente")}
                        }
                    className="formCart">
                        <input type="text" name="nombre" placeholder="Ingrese su nombre completo" value={formData.nombre} />
                        <input type="number" name="telefono" placeholder="Ingrese su numero de telefono" value={formData.telefono} />
                        <input type="email" name="email" placeholder="Ingrese su email (ejemplo@gmail.com)" value={formData.email}/>
                        <input type='email' name='emailConfirm' placeholder='Confirmar email' value={formData.emailConfirm} required></input>
                        <button>Comprar</button>
                    </form>
                </div>
            </div>    
           
        </div>
    )
}
export default Cart