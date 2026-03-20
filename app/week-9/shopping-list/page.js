"use client"

import PageHeader from "../../components/PageHeader"
import NewItem from "./NewItem"
import itemsData from "./items"
import ItemList from "./item-list"
import MealIdeas from "./meal-ideas"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation";
import { useUserAuth } from "../../contexts/AuthContext"


export default function Page() {
//Note: items was a prop that had to be passed down. itemsData is the original data from items data, it now becomes items. 
//this is were items is updated and reset (it needs to be in a global area where it can reach both newitem and itemlist). 
//when items get added from newitem (handle add item ) it sets the new data = data + new data, which item list can reach since they both use items. 
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");
    const { user, firebaseSignOut } = useUserAuth();
    const router = useRouter();

    useEffect(() => {
        if(!user) {
            router.replace("/week-9");
        }
    }, [user]);


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

        //Sign out of firebase
    const handleLogout = async () => {
        try {
            await firebaseSignOut();
            router.replace("/")
        } catch (error) {
            console.error("Logout Failed: ", error);
        }
    };

    return (
        <main className="bg-violet-100 py-10">
            <PageHeader title="Week 9: Shopping List + Meal Ideas (Authenticated)" />
            {/* When the screen size is greater than 950px, adjust to two columns instead of one*/}
            <h2 className="text-4xl text-center font-bold mt-10 text-gray-700"> Welcome! {user?.displayName || user?.email} </h2>
            <div className=" gap-10 max-w-6xl mx-auto grid min-[950px]:grid-cols-2">
                <div>
                <NewItem onAddItem={handleAddItem} />

                {/*When items in the ItemList are clicked, setSelectedItemName to that item, mealideas than use that item as the search param for the api to return list of meals*/}
                <ItemList items={items} onItemSelect={handleItemSelect}/>
                </div>
                <MealIdeas ingredient={selectedItemName}/>
            </div>
            <button onClick={handleLogout} className="bg-red-700 opacity-100 text-white rounded-xl px-2 right-align w-40 text-center fixed  hover:scale-105 hover:ease-out hover:duration-150 py-3 active:opacity-70 bottom-5 right-5">
                Sign out
            </button>
        </main>
    )
}