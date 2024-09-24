import { collection, getDocs, getFirestore, where,query } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from './ItemList'
import { CategoryContext } from "../context/CategoryContext";

export function ItemListContainer() {
    const [items, setItems] = useState([]);
    const [isLoading,setIsLoading] = useState(true)
    const { id } = useParams();
    const { setCurrentCategory } = useContext(CategoryContext)

    useEffect(()=> {
        const db = getFirestore();
        let itemsCollection;
        if (id){
            itemsCollection = query(collection(db,'items'),where('category' , '==' , id))
            setCurrentCategory(id)
        } else {
            itemsCollection = collection(db, 'items');
            setCurrentCategory(null)
        }
        
        getDocs(itemsCollection).then((snapshot) => {
            if(snapshot.size === 0){
                console.log('No items');
            }
            setItems(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})));
        }).catch((error) => {
            console.log('Error searching items', error);
        })
        .finally(()=>{
            setIsLoading(false)
        })
    },[id])

    if (isLoading){
        return <h3>Loading...</h3> //spinner
    }
    return (
        <section className="flex justify-evenly items-center flex-wrap gap-10">
            <ItemList items={items} />
        </section>
    );
}
