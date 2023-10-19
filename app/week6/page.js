"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items";
import { useState } from "react";


export default function Page() {

    const[items, setItems] = useState(itemsData);
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }

    return (
        <main className="mx-4">
            <h1 className="text-3xl font-bold my-4">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    );
}