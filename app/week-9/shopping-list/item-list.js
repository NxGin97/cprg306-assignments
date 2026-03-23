"use client";

import { useState } from "react";

import SortButton from "../../components/SortButton";
import Item from "./item"
import { getCategoryTitle } from "@/app/utils/categoryUtil";

export default function ItemList({items, onItemSelect}) {

    const itemsByCategory = items.reduce((groups, item) => {
    const category = item.category.toLowerCase().replace(/\s+/g, "-"); //for item.json category inconsistencies
    
    if (!groups[category]) {
        groups[category] = [];
    }
    
    groups[category].push(item);
    
    return groups;
    }, {});
    
    const [sortBy, setSortBy] = useState("name");
    
    const sortedItems = [...items].sort((a, b) => {
        const valueA = a[sortBy];
        const valueB = b[sortBy];
        
        return (typeof valueA === "string"? valueA.localeCompare(valueB) : valueA - valueB) || a.name.localeCompare(b.name) ;});

    const types = [
        "group by category",
        "category",
        "name",
        "quantity",
        "id",
    ]

    return(
        <section>
        <div className="flex justify-center items-center gap-4 mt-5 "> 
            <div className="flex gap-2">
                    {types.map((type) => (<SortButton key={type} type={type} sortBy={sortBy} setSortBy={setSortBy}/>))}
            </div>
        </div>
        {/* Different layout if sort by is set to group by category, so ternary is*/}
            {sortBy === "group by category" ? (
            <ul>
            {Object.entries(itemsByCategory).map(([category, categoryItems]) => (
                <li key={category}>
                    <div className="max-w-[850px] mx-auto">
                        <h2 className="font-bold text-lg opacity-80 text-center bg-white rounded-xl p-2 border-violet-400 max-w-[200px] border-3 mt-5 capitalize text-gray-800">{getCategoryTitle(category)}</h2>
                            <ul className="grid grid-cols-2 gap-x-4 max-w-[850px] mx-auto">
                                {categoryItems.map(item => (<li key={item.id}> <Item {...item} onSelect={() => onItemSelect && onItemSelect(item)}/></li>))}
                            </ul>
                    </div>
                </li>))} 
            </ul>) 
            : (
            <ul className="grid grid-cols-2 gap-4 max-w-[850px] mx-auto">
                {/*Item component receives onSelect as a prop. When the item is clicked, onSelect calls onItemSelect(item) in the parent component. Its the same as onClick. When the item is clicked, call onItemSelect with that item*/}
                {sortedItems.map((item) => (<li key={item.id}><Item {...item} onSelect={() => onItemSelect && onItemSelect(item)} /></li>))}
            </ul> 
            )}
        </section>
    );
}