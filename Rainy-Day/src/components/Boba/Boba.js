import React,{useState,useEffect} from 'react'
import BobaBody from './BobaBody'

const bobaAPI = "https://meme-api.com/gimme/boba/50";

function Boba()
{

const [boba,setBoba] = useState([])
useEffect(() => 
{
    fetch(bobaAPI)
    .then(r => r.json())
    .then(data => setBoba(data.memes))
}, []); 
    return (
        <div>
            <BobaBody boba={boba} />
        </div>
    )
}

export default Boba