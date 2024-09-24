import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { CartItem } from "./CartItem";
export function Checkout(){
    const [cart] = useContext(CartContext)
    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Checkout</h1>
            
            <div className="bg-white shadow-md rounded-lg p-4 mb-6">
                <h2 className="text-2xl font-semibold mb-4">Resumen del Pedido</h2>
                <div className="border-b pb-4">
                    {/* Encabezados */}
                    <div className="flex font-semibold border-b pb-2">
                        <span className="flex-1">Producto</span>
                        <span className="flex-1 text-right">Precio</span>
                        <span className="flex-1 text-right">Cantidad</span>
                    </div>
                    {cart.map(i => <CartItem key={i.id} item={i} />)}

                    <div className="flex justify-between py-2 font-semibold">
                        <span>Total</span>
                        <span>${total}</span>
                    </div>
                </div>
            </div>
            
            {/* Información del cliente */}
            <div className="bg-white shadow-md rounded-lg p-4 mb-6">
                <h2 className="text-2xl font-semibold mb-4">Información del Cliente</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2">Nombre</label>
                        <input type="text" id="name" className="border rounded-lg w-full p-2" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2">Correo Electrónico</label>
                        <input type="email" id="email" className="border rounded-lg w-full p-2" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="block mb-2">Dirección</label>
                        <input type="text" id="address" className="border rounded-lg w-full p-2" required />
                    </div>
                </form>
            </div>
            
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                Realizar pedido
            </button>
        </div>
    );
};
