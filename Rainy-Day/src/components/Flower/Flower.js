import React, { useEffect, useState } from "react";
import FlowerBody from './FlowerBody'

const flowerApi = "https://meme-api.com/gimme/flowerporn/50";

function Flower()
{
const [flower,setFlower] = useState([])
useEffect(() => 
{
    fetch(flowerApi)
    .then(r => r.json())
    .then(data => setFlower(data.memes))
}, []); 
    return (
        <div>
            <FlowerBody flower={flower} />
        </div>
    )
}

export default Flower