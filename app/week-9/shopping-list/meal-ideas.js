"use client"

import { useState, useEffect } from "react";
import { MealItem } from "./item";

// fetch api information. 
async function fetchMealIdeas(ingredient) {
    if(!ingredient) return [];
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`);
        if(!response.ok) {
            throw new Error(`HTTP ERROR: Status ${response.status}`);
        }
        const data = await response.json();
        //return the meals or any empty array
        return data.meals ?? [];
    } catch (error) {
        console.error(error);
    }
}


export default function MealIdeas({ingredient}) {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);

    //whenever 'ingredients' is changed, refresh fetch
useEffect(() => {
    async function loadMealIdeas() {
        setLoading(true);
        const meals = await fetchMealIdeas(ingredient);
        setMeals(meals);
        setLoading(false)
    }
    loadMealIdeas();
}, [ingredient]);


    return (
        <section className="min-[950px]:w-[420px] m-auto mt-10 rounded-xl border border-gray-300 py-4 pb-12 px-6 bg-white">
            <div className="flex flex-row">
                <p className= "p-2 text-gray-800"> Meal Ideas for: </p>
                {/*If ingredient exists, then style */}
                {ingredient && (
                <p className="bg-violet-700 text-white rounded-xl p-2 px-2 capitalize opacity-90">
                "{ingredient}"
                </p>
            )}
            </div>
            {/*If ingredient not selected*/}
            {!ingredient && (<p className="text-sm text-gray-500 ml-2">Choose an item to see ideas.</p>)}

            {/* Ingredient exist and Loading true*/}
            {ingredient && loading && (
            <p className="text-sm text-gray-500 pl-2">Loading...</p>
            )}
            {/*If ingredient is selected, it is not loading, but no meals in list */}
            {ingredient && !loading && meals.length === 0 && (<p className="text-sm text-gray-500 pl-2">No meals found.</p>)}

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 grid-rows-auto">
                {meals.map((meal) => (
                    <li key={meal.idMeal} className="h-full"> <MealItem name={meal.strMeal}/></li>))}
            </ul>

        </section>
    );
}