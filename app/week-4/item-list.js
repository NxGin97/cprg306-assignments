import Item from "./item"
import items from "./items"
//items is the list of items. you take the items from json and then map it. then use <Item /> for styling each iteration
export default function ItemList() {
    
    return(
        <section>
            <ul className="grid grid-cols-2 gap-4 max-w-[850px] mx-auto">
            {items.map((item) => (<li key={item.id}><Item{...item} /></li>))}
            </ul>
        </section>
    );
}