"use client"
import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const [selectedMealImage, setSelectedMealImage] = useState(null);

    const loadMealIdeas = async () => {
        if(ingredient !== "") {
            const data = await fetchMealIdeas(ingredient);
            setMeals(data);
        }
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    const handleMealClick = (meal) => {
        if (selectedMealImage === meal.strMealThumb) {
            setSelectedMealImage(null);
        } else {
            setSelectedMealImage(meal.strMealThumb);
        }
    };

    return (
        <div>
            <h2 className="text-xl font-bold">Meal Ideas</h2>
            <h2 className="text-sm">Here are some ideas using {ingredient}</h2>
            
            {meals.map(meal => {
                return (
                <div className="my-2 rounded px-2 py-2 bg-slate-900 hover:bg-yellow-900 cursor-pointer" onClick={() => { 
                    handleMealClick(meal);
                    }}>
                    <ul>
                        <li key={meal.idMeal}>{meal.strMeal}</li>
                        {selectedMealImage === meal.strMealThumb && (
                            <li>
                                <img src={meal.strMealThumb} alt={meal.strMeal} />
                            </li>
                        )}
                    </ul>
                </div>
                );
            })}
            
        </div>
    );
}

const fetchMealIdeas = async (ingredient) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return (data.meals != null) ? data.meals : [];
    } catch(e) {
        console.error("Cannot access the provided link ", e);
    }
}



