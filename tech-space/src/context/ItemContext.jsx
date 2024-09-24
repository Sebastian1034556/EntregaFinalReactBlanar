import { createContext, useEffect, useState } from "react";
import { getItems } from "../asyncMock";

// crear contexto
export const ItemContext = createContext(false)

// crear proveedor
export function ItemProvider({ children }) {
    const [itemList, setItemList] = useState([])
    useEffect(() => {
        getItems().then(data => {
            setItemList(data)
        })
    }, [])

    return (
        <ItemContext.Provider value={[itemList, setItemList]} >
            {children}
        </ItemContext.Provider>
    )
}

