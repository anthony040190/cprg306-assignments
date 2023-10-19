"use client"
import { useState } from "react";
import Item from "./item";
import items from "./items";

export default function ItemList() {

    const [sortBy, setSortBy] = useState("name");

    const handleSortByName = () => {
        setSortBy("name");
    }

    const handleSortByCategory = () => {
        setSortBy("category");
    }

    const handleSortByGroup = () => {
        setSortBy("group");
    }

    const sortedItems = (sortBy === "name") ? items.sort((a, b) => a.name.localeCompare(b.name) ) : items.sort((a, b) =>  a.category.localeCompare(b.category));
    let sortedByGroup = items.reduce((acc, item) => {
            acc[item.category] = acc[item.category] || [];
            acc[item.category].push(item);

            return acc;
    }, {});

    return (
        <div>
            <div className="flex gap-3">
                <button className="bg-blue-500 w-20 p-1 focus:bg-green-500 rounded" onClick={handleSortByName}>Name</button>
                <button className="bg-blue-500 w-20 p-1 focus:bg-green-500 rounded" onClick={handleSortByCategory}>Category</button>
                <button className="bg-blue-500 w-20 p-1 focus:bg-green-500 rounded" onClick={handleSortByGroup}>Group by Category</button>
            </div>

            {
            sortBy === "group" ? <Group categoryArray={sortedByGroup} />  : sortedItems.map(item => <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} /> )};
        </div>

        
    );
    
    
}