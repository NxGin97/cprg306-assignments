import Item from "../week-4/item"
import items from "../week-4/items"

export default function ItemByCategory() {
    // note: category array is created with items in it. groups is the acc object, item is the current item. 
    // if acc doesn't exist, create a new one, if it does, push item to that array. return groups to be looped through again till all items pass. 
    const itemsByCategory = items.reduce((groups, item) => {
    const category = item.category;

    if (!groups[category]) {
        groups[category] = [];
    }

    groups[category].push(item);

    return groups;
    }, {});
    

    // note: now destructure itemsByCategory into category and its items. for each category (from 'categoryItems') display 
    // header for that category and display each item in category using <li><Items><</li>. (Nested loop)
    return (
        <ul>
        {Object.entries(itemsByCategory).map(([category, categoryItems]) => (
            <li key={category}>
            <div className="max-w-[850px] mx-auto">
                <h2 className="font-bold text-lg opacity-80 text-center bg-white rounded-xl p-2 border-violet-400 max-w-[200px] border-3 mt-5 capitalize">{category}</h2>
                    <ul className="grid grid-cols-2 gap-x-4 max-w-[850px] mx-auto">
                        {categoryItems.map(item => (<li key={item.id}> <Item {...item} /></li>))}
                    </ul>
            </div>
            </li>))}
        </ul>);
}