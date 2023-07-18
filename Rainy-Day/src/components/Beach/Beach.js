import React,{useState,useEffect}from 'react'
import BeachBody from './BeachBody'

const beachAPI = "https://meme-api.com/gimme/BeachPorn/50";

function Beach()
{
const [beach,setBeach] = useState([])
useEffect(() => 
{
    fetch(beachAPI)
    .then(r => r.json())
    .then(data => setBeach(data.memes))
}, []); 
    return (
        <div>
            <BeachBody beach={beach} />
        </div>
    )
}

export default Beach