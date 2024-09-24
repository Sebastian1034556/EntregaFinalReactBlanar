import { useParams } from "react-router-dom";
import { CounterComponent } from "./CounterComponent";
import { useContext,useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { getFirestore,doc,getDoc } from "firebase/firestore";

export function ItemDetail() {
    const [item,setItem] = useState(null)
    const [,,addItem] = useContext(CartContext)
    const { itemId } = useParams();

    useEffect(()=>{
        const db = getFirestore();  
        const getItem = doc(db, 'items', itemId);
        getDoc(getItem).then((snapshot)=>{
            if(snapshot.exists()){
                setItem( {id : snapshot.id , ... snapshot.data()});
            }
        }).catch((error)=>{
            console.log('Error getting document:', error);
        });
    },[itemId])

    const handleClick = () => {
        addItem(item)
    }

    return (
        item ? (
            <div className="flex flex-col items-center max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg max-h-full">
                <img
                    src={item.image}
                    alt={item.name}
                    className=" w-1/2 h-auto mb-4 rounded-lg shadow-md"
                />
                <h1 className="text-2xl font-bold mb-2 text-gray-800">{item.name}</h1>
                <h3 className="text-lg font-semibold mb-4 text-gray-600">{item.detail}</h3>
                <p className="text-xl font-semibold text-gray-800">${item.price}</p>
                <CounterComponent />
                <button 
                    onClick={handleClick} 
                    className="px-4 py-2 border border-transparent bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Comprar
                </button>
            </div>
        ) : (
            <h1>Item not found</h1>
        )
    );
    
}
