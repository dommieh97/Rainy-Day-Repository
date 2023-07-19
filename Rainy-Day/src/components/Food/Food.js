import React, { useEffect, useState } from "react";
import FoodBody from './FoodBody'
import MyContext from '../MyContext';

const foodAPI = "https://meme-api.com/gimme/FoodPorn/50";

function Food()
{
const [food,setFood] = useState([])
useEffect(() => 
{
    fetch(foodAPI)
    .then(r => r.json())
    .then(data => setFood(data.memes))
}, []); 
    return (
        <div>
            <FoodBody food={food}/>
        </div>
    )
}

export default Food