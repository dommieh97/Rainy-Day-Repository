import React,{useState,useEffect,useContext}from 'react'
import BeachBody from './BeachBody'
import MyContext from '../MyContext';
const beachAPI = "https://meme-api.com/gimme/BeachPorn/50";

function Beach()
{

const {setApiData} = useContext(MyContext);
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