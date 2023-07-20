import React,{useEffect,useState} from 'react'
import CatBody from './CatBody'

const catAPI = "https://meme-api.com/gimme/catpictures/50";

function Cat()
{

const [cat,setCat] = useState([])
// const [sH,setSH] = useState([])
// const [persian,setPersian] = useState([])
// const [sphynx,setSphynx] = useState([])
// const [siamese,setSiamese] = useState([])
// const [sF,setSF] = useState([])
// const [cSU,setCSU] = useState([])
useEffect(() => 
{
    fetch(catAPI)
    .then(r => r.json())
    .then(data => setCat(data.memes))

    // fetch("https://meme-api.com/gimme/britishshorthair /50")
    // .then(r => r.json())
    // .then(data => setSH(data.memes))
    
    // fetch("https://meme-api.com/gimme/persiancat /50")
    // .then(r => r.json())
    // .then(data => setPersian(data.memes))
    
    // fetch("https://meme-api.com/gimme/sphynx /50")
    // .then(r => r.json())
    // .then(data => setSphynx(data.memes))
    
    // fetch("https://meme-api.com/gimme/Siamesecats /50")
    // .then(r => r.json())
    // .then(data => setSiamese(data.memes))
    
    // fetch("https://meme-api.com/gimme/scottishfold /50")
    // .then(r => r.json())
    // .then(data => setSF(data.memes))
    
    // fetch("https://meme-api.com/gimme/CatsStandingUp /50")
    // .then(r => r.json())
    // .then(data => setCSU(data.memes))
}, []); 
    return (
        <div>
            <CatBody cat={cat} />
        </div>
    )
}

export default Cat