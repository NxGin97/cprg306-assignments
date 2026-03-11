"use client"

import PageHeader from "../components/PageHeader"
import ReturnHome from "../components/ReturnHome"

import NewItem from "./NewItem"
import itemsData from "./items"
import ItemList from "./item-list"
import MealIdeas from "./meal-ideas"

import { useState } from "react"


export default function Page() {
//Note: items was a prop that had to be passed down. itemsData is the original data from items data, it now becomes items. 
//this is were items is updated and reset (it needs to be in a global area where it can reach both newitem and itemlist). 
//when items get added from newitem (handle add item ) it sets the new data = data + new data, which item list can reach since they both use items. 
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
        setItems((prev) => [...prev, newItem]);
    }

    //used to remove emoji's commas and weight so that it can be passed into the api 
    function cleanName(name) {
    let base = name.split(",")[0];
    base = base.replace(/[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2580-\u27BF]|\uD83E[\uDD10-\uDDFF]/g, "");
    return base.trim().toLowerCase();
}

    //when item is selectd, it sets the selectedItemName to that item, which MealIdeas then uses as the prop 'ingredient' to fetch the meals from the api. 
    const handleItemSelect = (item) => {
        setSelectedItemName(cleanName(item.name));
    }

    return (
        <main className="bg-violet-100 py-10">
            <PageHeader title="Week 8: Shopping List + Meal Ideas" />
            <div className=" gap-10 max-w-6xl mx-auto grid min-[950px]:grid-cols-2">
                <div>
                <NewItem onAddItem={handleAddItem} />

                {/*When items in the ItemList are clicked, setSelectedItemName to that item, mealideas than use that item as the search param for the api to return list of meals*/}
                <ItemList items={items} onItemSelect={handleItemSelect}/>
                </div>
                <MealIdeas ingredient={selectedItemName}/>
            </div>
            <ReturnHome />
        </main>
    )
}