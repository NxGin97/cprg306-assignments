"use client"

import { useState } from "react";
import options from "./options"

export default function NewItem({ onAddItem }) {
    
    const [item, setItem] = useState({
        name: "",
        quantity: 1,
        category: "produce"
    })

    //e is the object that holds all the inputted values from the form. then each property is redefined into item.
    const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {...item, 
        category: item.category.toLowerCase().replace(/\s+/g, "-"),
        id: Math.random().toString(36).substring(2, 9)}
    onAddItem(newItem); //the same as 'handleAddItem(newItem)'

    const initialState = { name: "", quantity: 1, category: "produce"};
    setItem(initialState);
    }

    //put into items object by ...item, (the change) name: "newName" or, quantity: "newQuantity" or, category: "newCategory"
    const handleChange = (e) => {
    const { name, value, type } = e.target;
    setItem((prev) => ({...prev, [name]: type === "number" ? Number(value) : value, 
    }));
    }

    const inputStyle= "w-full rounded-md p-2 border border-gray-400 bg-violet-100 my-2 opacity-80 h-10 text-gray-800 placeholder-gray-700";

    return (
            <form onSubmit={handleSubmit} className="w-[420px] m-auto mt-10 rounded-xl border border-gray-300 p-4 bg-white">
                <label htmlFor="item-name" className="text-gray-700">Name: </label> 
                    <input type="text" name="name" id="item-name" value={item.name} 
                    onChange={handleChange} 
                    required 
                    placeholder="e.g., Cheddar cheese" 
                    className={inputStyle}>
                    </input>

                <div className="flex flex-row gap-4">
                    <div>
                        <label htmlFor="quantity" className="text-gray-700">Quantity (1-99): </label>
                            <input type="number" name="quantity" id="quantity" value={item.quantity} 
                            onChange={handleChange} 
                            min="1" max="99" 
                            className={`${inputStyle} dark:text-gray-800`}>
                            </input>
                    </div>
                    <div>
                    <label htmlFor="category" className="text-gray-700">Category: </label>
                        <select name="category" id="category" value={item.category} 
                        onChange={handleChange} 
                        className={`${inputStyle} dark:text-gray-800`}>
                            {options.map(({value, title}) => (<option key={value} value={value}>{title}</option>))}
                        </select>
                    </div>
                </div>
                    <div>
                        <button type="submit" className="bg-violet-800 opacity-90 text-white active:bg-grey-800 w-full rounded-md h-10 mt-5 hover:cursor-pointer hover:opacity-75 active:opacity-50">+</button>
                    </div>
            </form>
    )
}