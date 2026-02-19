"use client";

import { useState } from "react";

import SortButton from "./sort-button";
import Item from "./item"

//items is the list of items. you take the items from json and then map it. then use <Item /> for styling each iteration
export default function ItemList({items}) {

    //copied and pasted from week 4
    const itemsByCategory = items.reduce((groups, item) => {
    const category = item.category;
    
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
        // check if the value of sortBy.x is a string (ex. catgeory and name vs quantity and (possibly) id. ) 
        // if it is, use localeCompare, if not a-b. If 0 (FALSY) is returned (when a = b) in || comparator, then return second expression. 
        return (typeof valueA === "string"? valueA.localeCompare(valueB) : valueA - valueB) || a.name.localeCompare(b.name) ;});


    return(
        <section>
        <div className="flex justify-center items-center gap-4 mt-5 "> 
            <p className="font-bold text-2xl opacity-80">Sort by:</p>
            <div className="flex gap-2">
                    <SortButton type="Group By Category" sortBy={sortBy} setSortBy={setSortBy}/>
                    <SortButton type="category" sortBy={sortBy} setSortBy={setSortBy}/>
                    <SortButton type="name" sortBy={sortBy} setSortBy={setSortBy}/>
                    <SortButton type="quantity" sortBy={sortBy} setSortBy={setSortBy}/>
                    <SortButton type="id" sortBy={sortBy} setSortBy={setSortBy}/>
            </div>
        </div>

            {sortBy === "Group By Category" ? (
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
            </ul>) : 
            (
            <ul className="grid grid-cols-2 gap-4 max-w-[850px] mx-auto">
                {sortedItems.map((item) => (<li key={item.id}><Item{...item} /></li>))}
            </ul> 
            )}
        </section>
    );
}