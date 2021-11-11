import {createContext, useState, useContext } from "react";

const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) =>
{
    const [cartList, setCartList] = useState([]);

    //Agregar al carrito
    const addToCart = itemsAdded =>
    {
        //Encontrar si el id del producto que entra es igual a algun id que ya este en el array
        const itemFindCart = cartList.find(itfc => itfc.id === itemsAdded.id);
       
        if(!itemFindCart)
        {
            //Si la igualdad es falsa, meter el producto en el carrito
            setCartList(
                [
                    ...cartList,
                    itemsAdded
                ]
            )
        }
        else
        {
            console.log("Este producto ya esta en el carrito")
            return cartList
        }
    }
    //Remover un item del carrito
    const removeItemCart = () =>
    {
        console.log("el producto fue eliminado")
    }
    //Limpiar carrito
    const cleanCart = () =>
    {
        setCartList([]); //Seteo mi array de cartList con uno vacio
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, removeItemCart, cleanCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider



