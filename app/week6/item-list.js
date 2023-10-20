"use client"
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {

    const [sortBy, setSortBy] = useState("name");

    const handleSortByName = () => {
        setSortBy("name");
    }

    const handleSortByCategory = () => {
        setSortBy("category");
    }


    console.log(items);

    const sortedItems = (sortBy === "name") ? items.sort((a, b) => a.name.localeCompare(b.name) ) : items.sort((a, b) =>  a.category.localeCompare(b.category));

    return (
        <div className="w-3/12">
            <div className="flex gap-3">
                <div className="w-2/12 p-1">
                    <p>Sort By:</p>
                </div>
                
                <div className="w-5/12">
                    <button className="bg-blue-500 w-full p-1 focus:bg-green-500 rounded" onClick={handleSortByName}>Name</button>
                </div>
                
                <div className="w-5/12">
                    <button className="bg-blue-500 w-full p-1 focus:bg-green-500 rounded" onClick={handleSortByCategory}>Category</button>
                </div>
            </div>

            {
            sortedItems.map(item => <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} /> )};
        </div>

        
    );
    
    
}