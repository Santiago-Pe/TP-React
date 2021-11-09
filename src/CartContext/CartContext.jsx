import {createContext, useState, useContext } from "react";

const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)
{

}

const CartContextProvider = ({children}) =>
{
    const [cartList, setCartList] = useState([]);
    const showList = () =>
    {
        console.log(cartList)
    }
    return(
        <CartContext.Provider value={{cartList, showList}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider