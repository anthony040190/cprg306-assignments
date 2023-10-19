"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (e) => {
        e.preventDefault();


        const item = {
            name: name,
            quantity: quantity,
            category: category
        };

        // FROM page.js --> function to add new Item from textbox (pass the function through props without param, the param declare in this page)
        onAddItem(item);

        setName("");
        setQuantity(1);
        setCategory("Produce");
    }    

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    }

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    }

    return (
        <div className="flex w-full mt-10">
            <form onSubmit={handleSubmit} className="rounded pb-6 mb-4 max-w-md">
                <div className="mb-2">
                    <input type="text" value={name} onChange={handleNameChange} required className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Item Name" />
                </div>

                <div className="mb-2 flex justify-between">
                    <input type="number" value={quantity} onChange={handleQuantityChange} min="1" max="99" className="shadow appearance-none border rounded-lg w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    <select onChange={handleCategoryChange} className="shadow appearance-none border rounded-lg w-2/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        <option disabled>Category</option>
                        <option defaultValue={'Produce'}>Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen Foods">Frozen Foods</option>
                        <option value="Canned Goods">Canned Goods</option> 
                        <option value="Dry Goods">Dry Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                
                <button className="w-full text-center border-white bg-blue-700 hover:bg-blue-500 py-3 rounded">+</button>
            </form>
        </div>
    );
}