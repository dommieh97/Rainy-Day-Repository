import React,{useEffect,useState} from 'react'
import CatBody from './CatBody'

const catAPI = "https://meme-api.com/gimme/catpictures/50";

function Cat()
{

const [cat,setCat] = useState([])
useEffect(() => 
{
   
    fetch(catAPI)
    .then(r => r.json())
    .then(data => setCat(data.memes))

}, []); 
    return (
        <div>
            <CatBody cat={cat} />
        </div>
    )
}

export default Cat