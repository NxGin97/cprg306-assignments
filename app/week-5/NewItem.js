"use client"

import { useState } from "react";

export default function NewItem() {
    
    const [itemName, setItemName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (e) => {
    e.preventDefault();
    const item = {itemName, quantity, category};
    console.log(item)
    alert(`Added\n Item: ${item.itemName} \n Quantity: ${item.quantity} \n Category: ${item.category}`)

    setItemName("");
    setQuantity(1);
    setCategory("produce");
    }

    const inputStyle= "w-full rounded-md p-2 border border-gray-400 bg-violet-100 my-2 opacity-80 h-10";

    return (
            <form onSubmit={handleSubmit} className="w-[420px] m-auto mt-10 rounded-xl border border-gray-300 p-4 bg-white">
                <label className="text-gray-700">
                    Name: 
                    <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} required placeholder="e.g., Cheddar cheese" className={inputStyle}></input>
                </label>

                <div className="flex flex-row gap-4">
                    <label className="text-gray-700">
                        Quantity (1-99): 
                        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" max="99" required className={inputStyle}></input>
                    </label>
                    <label className="text-gray-700">
                        Category: 
                        <select value={category} onChange={(e) => setCategory(e.target.value)} required className={inputStyle}>
                            <option value="produce">Produce</option>
                            <option value="dairy">Dairy</option>
                            <option value="bakery">Bakery</option>
                            <option value="meat">Meat</option>
                            <option value="frozen-foods">Frozen Foods</option>
                            <option value="canned-goods">Canned Goods</option>
                            <option value="dry-goods">Dry Goods</option>
                            <option value="beverages">Beverages</option>
                            <option value="snacks">Snacks</option>
                            <option value="household">Household</option>
                            <option value="other">Other</option>
                        </select>
                    </label>
                </div>
                    <div>
                        <button type="submit" className="bg-violet-800 text-white active:bg-grey-800 w-full rounded-md h-10 mt-5 hover:cursor-pointer hover:opacity-80">+</button>
                    </div>
            </form>
    )
}
