import { ItemList } from './ItemList'
export function ItemListContainer() {
    return (
        <section className="flex justify-evenly items-center flex-wrap gap-10">
            <ItemList></ItemList>
        </section>
    );
}
