import React, { useEffect, useState } from "react";
import VGBody from './VGBody'

const vidgAPI = "https://meme-api.com/gimme/gamecollecting/50";

function VG()
{
const [vg,setVG] = useState([])
useEffect(() => 
{
    fetch(vidgAPI)
    .then(r => r.json())
    .then(data => setVG(data.memes))
}, []); 
    return (
        <div>
            <VGBody vg={vg} />
        </div>
    )
}

export default VG