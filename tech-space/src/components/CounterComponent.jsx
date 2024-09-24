import { useState } from "react";
export function CounterComponent(){
    const [count, setCount] = useState(1);
    const handleIncrement = () => setCount(count + 1);
    const handleDecrement = () => count != 1 && setCount(count - 1);
    return(
        <>
            <div className="flex justify-between items-center  gap-3">
            <button className="bg-green-600 @apply text-white text-base cursor-pointer shadow-[0px_4px_6px_rgba(0,0,0,0.1)] transition-[background-color] duration-[0.3s] ease-[ease] px-5 py-2.5 rounded-[5px] border-[none]" onClick={handleIncrement}>+</button>
            <button className="bg-red-600 @apply text-white text-base cursor-pointer shadow-[0px_4px_6px_rgba(0,0,0,0.1)] transition-[background-color] duration-[0.3s] ease-[ease] px-5 py-2.5 rounded-[5px] border-[none]" onClick={handleDecrement}>-</button>
            </div>
            <p className=" text-4xl ">{count}</p>
            
        </>
    )

}