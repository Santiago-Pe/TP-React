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
    const {cartList, removeItemCart, cleanCart, calculateTotalPriece} = useCartContext();
    const [formData, setFormData] = useState(
        {
            nombre: "",
            telefono: "",
            email: ""
        }
    )
    const[tableCart, setTableCart] = useState("activo");


    //FUNCIONES
    const handlesTable = () =>
    {
        setTableCart("desactivado");
        cleanCart();
    }
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
                <div className="containerBtnCleanCart">
                    <button className="btnCleanCart" onClick={() =>handlesTable() }>Vaciar carrito</button>
                </div>
            :   
                orderId === ""
            ?
                <div className="containerEmptyCart">
                    <h3>Carrito de compras</h3>
                    <p>Ups! El carrito esta vacio :(</p>
                    <p>Ve a ver nuestros productos</p>
                    <Link to={"/categoria"}>
                    <button className="btnSeeProd">Ver productos</button>
                    </Link>
                </div>
            :  
                <div>
                    <p>Gracias por tu compra</p> 
                    <p>Tu codigo de compras es: {orderId}</p>
                </div>       
            }
            {   
            
                <table className="containerTable">
                    <thead className={tableCart}>
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
               
            }
            <hr />
             <div className="containerForm">
                <h3>Completar los datos para finalizar la compra</h3>
                <label>Total <span>${calculateTotalPriece()}</span></label> 
                <form onChange={handleChange} onSubmit={creatOrder} className="formCart">
                    <input type="text" name="nombre" placeholder="Ingrese su nombre completo" value={formData.nombre} />
                    <input type="number" name="telefono" placeholder="Ingrese su numero de telefono" value={formData.telefono} />
                    <input type="email" name="email" placeholder="Ingrese su email (ejemplo@gmail.com)" value={formData.email}/>
                    <button>Comprar</button>
                </form>
            </div>    
           
        </div>
    )
}
export default Cart