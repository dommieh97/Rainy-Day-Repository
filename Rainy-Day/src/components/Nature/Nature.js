import React, { useEffect, useState } from "react";
import NatureBody from './NatureBody'
import MyContext from '../MyContext';

const natureAPI = "https://meme-api.com/gimme/natureporn/50";

function Nature()
{
const [nature,setFood] = useState([])
useEffect(() => 
{
    fetch(natureAPI)
    .then(r => r.json())
    .then(data => setFood(data.memes))
}, []); 
    return (
        <div>
            <NatureBody nature={nature} />
        </div>
    )
}

export default Nature