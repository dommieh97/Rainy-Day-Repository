import React, { useEffect, useState } from "react";
import DessertBody from './DessertBody'

const dessertAPI = "https://meme-api.com/gimme/DessertPorn/50";

function Dessert()
{
const [dessert,setDessert] = useState([])
useEffect(() => 
{
    fetch(dessertAPI)
    .then(r => r.json())
    .then(data => setDessert(data.memes))
}, []); 
    return (
        <div>
            <DessertBody dessert={dessert}/>
        </div>
    )
}

export default Dessert