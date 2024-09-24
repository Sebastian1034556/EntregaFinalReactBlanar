import { collection, getDocs, getFirestore, where,query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemContainer } from "./ItemContainer";

export function ItemList() {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(()=> {
        const db = getFirestore();
        let itemsCollection;
        if (id){
            itemsCollection = query(collection(db,'items'),where('category' , '==' , id))
        } else {
            itemsCollection = collection(db, 'items');
        }
        
        getDocs(itemsCollection).then((snapshot) => {
            if(snapshot.size === 0){
                console.log('No items');
            }
            setItems(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})));
        }).catch((error) => {
            console.log('Error searching items', error);
        });
    },[id])


    return (
        <>
        {
            items.length > 0 ? (
                items.map(i => <ItemContainer key={i.id} item={i} />)
            ) : (
                <h3>Loading...</h3>
            )
        } 
        </>
            )
}