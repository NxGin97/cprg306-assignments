"use client"

import PageHeader from "../components/PageHeader"
import ReturnHome from "../components/ReturnHome"

import NewItem from "./NewItem"
import itemsData from "./items"
import ItemList from "./item-list"

import { useState } from "react"

export default function Page() {
//Note: items was a prop that had to be passed down. itemsData is the original data from items data, it now becomes items. 
//this is were items is updated and reset (it needs to be in a global area where it can reach both newitem and itemlist). 
//when items get added from newitem (handle add item ) it sets the new data = data + new data, which item list can reach since they both use items. 
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem])
    }

    return (
        <main className="bg-violet-100 py-10">
            <PageHeader title="Week 6: Interactivity with Forms" />
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items}/>
            <ReturnHome />
        </main>
    )
}