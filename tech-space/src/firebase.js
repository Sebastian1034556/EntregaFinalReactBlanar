// export async function getItems() {
//     const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?category=MLA3502");
//     const data = await response.json();
//     return formatData(categories,data.results);
// }

// fetchItems.js
// getItems.js
export async function getItems(db, collection, getDocs, filters = null) {
    try {
        let itemsCollection;

        if (filters) {
            itemsCollection = filters;
        } else {
            itemsCollection = collection(db, 'items');
        }

        const snapshot = await getDocs(itemsCollection);

        if (snapshot.size === 0) {
            console.log('No items');
            return []; 
        } else {
            return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        }

    } catch (error) {
        console.error('Error searching items', error);
        return []; 
    }
}
