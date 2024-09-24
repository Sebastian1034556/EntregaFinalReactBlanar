import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { BsCart3 } from "react-icons/bs";






export function CartWidget(){
    const [cart] = useContext(CartContext)
    return (
        <div className="relative ml-8 p-1  rounded ">
            <BsCart3  size={24} /> {/* Icono de carrito */}
            {cart.length > 0 && (
                <span className="absolute top-[-12px] right-[-10px] bg-red-500 text-white rounded-full p-1 text-xs font-bold w-5 h-5 flex items-center justify-center">
                {cart.length}
            </span>
            )}
            
        </div>
    )
}