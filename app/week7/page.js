"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items";
import MealIdeas from "./meal-ideas";
import { useState } from "react";

export default function Page() {

    const [items, setItems] = useState(itemsData);
    const [selectedItemName , setSelectedItemName ] = useState("");

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }

    const handleItemSelect = (itemName) => {
        const splittedItemName = itemName.split(",");
        const cleanIngredient = splittedItemName[0].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim();
        setSelectedItemName(cleanIngredient);
    }

    return (
        <main className="mx-4">
            <h1 className="text-3xl font-bold my-4">Shopping List</h1>
            <div className="flex flex-row gap-4">
                <div className="basis-1/4">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                
                <div className="basis-1/4">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
                
            </div>
        </main>
    );
}