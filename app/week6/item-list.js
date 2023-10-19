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
        <div>
            <div className="flex gap-4">
                <label>Sort By:</label>
                <button className="bg-blue-500 w-20 p-1 focus:bg-green-500 rounded" onClick={handleSortByName}>Name</button>
                <button className="bg-blue-500 w-20 p-1 focus:bg-green-500 rounded" onClick={handleSortByCategory}>Category</button>
                {/* <button className="bg-blue-500 w-20 p-1 focus:bg-green-500 rounded" onClick={handleSortByGroup}>Group by Category</button> */}
            </div>

            {
            sortedItems.map(item => <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} /> )};
        </div>

        
    );
    
    
}