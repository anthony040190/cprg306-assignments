"use client";
import { useEffect, useState } from "react";

export default function Ingredient({ mealIdea }) {
    const [mealIdeas, setMealIdeas] = useState([]);

    const loadMealIdeas = async () => {
        const data = await fetchIngredients(mealIdea);
        setMealIdeas(data);      
    }

    useEffect(() => {
        loadMealIdeas();
    }, [mealIdea]);

    return (
        <div>
            <ul>
            {
            // mealIdeas.map(meal => {
            //     return (
            //         <li key={meal.idMeal}>{meal.strMeal}</li>
            //     );
            // })
            }
            </ul>
        </div>
    );
}

const fetchIngredients = async (ingredient) => {

    try {
        let firstLetter = ingredient.charAt(0);
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstLetter}`);
        const data = await res.json();
        
        const datas = data.meals.filter(meal => meal.strMeal === ingredient);   

        return datas;
    } catch (error) {
        console.error("Cannot access the provided link (https://www.themealdb.com/api/json/v1/1/search.php?f)", error);
    }
}