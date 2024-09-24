import { createContext, useState } from "react"

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

    return(
        <CartContext.Provider value={[cart,setCart,addItem]}>
            {children}
        </CartContext.Provider>
    )
}