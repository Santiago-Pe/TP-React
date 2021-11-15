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
            setCartList( [...cartList, itemsAdded] )       
        }
        else
        {
            //En caso de que en cartList el producto ya se encuentre, solo le aumentara la cantidad y lo seteara.
            itemFindCart.cantidad = itemFindCart.cantidad + itemsAdded.cantidad 
            setCartList( [...cartList] )
        }
    }
    //Remover un item del carrito
    const removeItemCart = idItemsRemoveCart =>
    {
        //Que me filtre todos los id distitnos al seleccionado (eliminadolo asi del carro).
        setCartList(cartList.filter(itemSerch => itemSerch.id !== idItemsRemoveCart))
    }
    //Limpiar carrito
    const cleanCart = () =>
    {
        //Seteo mi array de cartList con uno vacio
        setCartList([]); 
    }
    //Sumador de precio
    const calculateCumulativePrice = () =>
    { 
        const cumulativePrice = (acum, prod) => (acum + (prod.precio * prod.cantidad));
        return(cartList.reduce(cumulativePrice ,0));
    }
    //Acumulador de cantidad de productos ---> cartwidget
    const cantProdAcum = () =>
    {
       const prodAcum = ((acum, prod) => (acum + prod.cantidad));
        return (cartList.reduce(prodAcum, 0));
    }
    //Sacarlo luego
    console.log(cartList)

    return(
        <CartContext.Provider value={{cartList, addToCart, removeItemCart, cleanCart, calculateCumulativePrice, cantProdAcum}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider



