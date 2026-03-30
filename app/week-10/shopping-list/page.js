"use client"

import PageHeader from "../../components/PageHeader"
import NewItem from "./NewItem"
// import itemsData from "./items"
import ItemList from "./item-list"
import MealIdeas from "./meal-ideas"
import ReturnHome from "@/app/components/ReturnHome"

import { getItems, addItem, removeItem } from "../_services/shopping-list-service"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation";
import { useUserAuth } from "../../contexts/AuthContext"


export default function Page() {

    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");
    const { user, loading } = useUserAuth();
    const router = useRouter();
    
    async function loadItems() {
        try {
            const loadedItems = await getItems(user.uid);
            setItems(loadedItems);
        } catch (error) {
            console.error("Error loading items: ", error);
        }
    }

    useEffect(() => {
        if (loading) return;
        if (!user) {
            router.replace("/auth");
            return;
        }
        loadItems();
    }, [user, loading]);

    if (loading || !user ) {
        return <p className="text-center mt-10">Loading...</p>
    }


    async function handleAddItem(newItem) {
        const itemId = await addItem(user.uid, newItem);
        const itemWithId = {...newItem, id: itemId};

        setItems((prev) => [...prev, itemWithId]);
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
        <main className="bg-violet-100 py-10 min-h-screen">
            <PageHeader title="Week 10: Shopping List + Meal Ideas 
            (Firebase)" />
            {/* When the screen size is greater than 950px, adjust to two columns instead of one*/}
            <h2 className="text-4xl text-center font-bold mt-10 text-gray-700"> Welcome! {user?.displayName || user?.email} </h2>
            <div className=" gap-10 max-w-6xl mx-auto grid min-[950px]:grid-cols-2">
                <div>
                <NewItem onAddItem={handleAddItem} />

                {items.length === 0 ? (
                    <div className="flex justify-center items-center border-8 border-double border-violet-400 bg-white rounded-xl mx-auto p-5 mt-5 w-[420px] h-[100px]">
                        <p className="text-gray-500 ">
                            No items currently in your list.
                        </p>
                    </div>
                    ) : (
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                    )}
                </div>
                <MealIdeas ingredient={selectedItemName}/>
            </div>
            <ReturnHome/>
        </main>
    )
}