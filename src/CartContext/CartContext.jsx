import {createContext, useState, useContext } from "react";

const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) =>
{
    const [cartList, setCartList] = useState([]);//Array
    const[contVisible, setContVisible] = useState("desactivado");//Formulario visible o no


    const activeCart = () =>
    {
        setContVisible("activado"); 
    }
    const desactiveCart = () =>
    {
        setContVisible("desactivado"); 
    }
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
        setCartList(cartList.filter(itemSerch => itemSerch.id !== idItemsRemoveCart))
    }
    //Limpiar carrito
    const cleanCart = () =>
    {
        setCartList([]);
        desactiveCart(); 
    }
    //Acumulador precios
    const calculateTotalPriece = () =>
    { 
        const cumulativePrice = (acum, prod) => (acum + (prod.precio * prod.cantidad));
        return(cartList.reduce(cumulativePrice ,0));
    }
    //Acumulador cantidad productos
    const cantProdAcum = () =>
    {
       const prodAcum = ((acum, prod) => (acum + prod.cantidad));
        return (cartList.reduce(prodAcum, 0));
    }
  

    return(
        <CartContext.Provider value={{
            contVisible,
            activeCart,
            desactiveCart,
            cartList, 
            addToCart, 
            removeItemCart, 
            cleanCart, 
            calculateTotalPriece, 
            cantProdAcum
            }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider



