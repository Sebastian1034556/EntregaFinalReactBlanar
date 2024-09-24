import { createContext, useEffect, useState } from "react"

export const CartContext = createContext(false)

export function CartProvider({children}){
    const [cart,setCart] = useState([]) 
    
    const addItem = (item) => {
        setCart([...cart , item])
    }
    const removeItem = (id) => {
        setCart(cart.filter(i => i.id !== id))
    }

    const clearCart = () => setCart([])

    const isInCart = (id) => {
        return cart.some(i => i.id === id)
    }
    const updateQuantity = (item) => {
        setCart(cart.map(i => 
            i.id == item.id ? { ...i, quantity: item.quantity } : i
        ));
    }
    

    return(
        <CartContext.Provider value={[cart,setCart,addItem,isInCart,updateQuantity]}>
            {children}
        </CartContext.Provider>
    )
}