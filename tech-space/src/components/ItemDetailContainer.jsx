import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { ItemDetail } from "./ItemDetail";

export function ItemDetailContainer() {
    const [item,setItem] = useState(null)
    const { itemId } = useParams();
    const [isLoading,setIsLoading] = useState(true)

    useEffect(()=>{
        const db = getFirestore();  
        const getItem = doc(db, 'items', itemId);
        getDoc(getItem).then((snapshot)=>{
            if(snapshot.exists()){
                setItem( {id : snapshot.id , ... snapshot.data()});
            }
        }).catch((error)=>{
            console.log('Error getting document:', error);
        })
        .finally(()=>{
            setIsLoading(false)
        })
    },[itemId])

    if (isLoading) {
        return <h3>Loading...</h3> // lo tengo que cambiar por un spinner
    }
    //agregar un estado de error

    return <ItemDetail item={item} />
}
