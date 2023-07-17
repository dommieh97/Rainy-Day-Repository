import React,{useEffect,useState} from 'react';
import App from './App';
import MyContext from './MyContext';

const dogAPI=      "https://meme-api.com/gimme/dogpictures/50"; 
const bobaAPI=     "https://meme-api.com/gimme/boba/50";
const catAPI=      "https://meme-api.com/gimme/catpictures/50";
const foodAPI=     "https://meme-api.com/gimme/FoodPorn/50";
const dessertAPI=  "https://meme-api.com/gimme/DessertPorn/50";
const beachAPI=    "https://meme-api.com/gimme/BeachPorn/50";
const natureAPI=   "https://meme-api.com/gimme/natureporn/50";
const flowerApi=   "https://meme-api.com/gimme/flowerporn/50";

function FetchBox()
 {
    const [dog, setDog] = useState([])
    const [boba, setBoba] = useState([])
    const [cat, setCat] = useState([])
    const [food, setFood] = useState([])
    const [dessert, setDessert] = useState([])
    const [beach, setBeach] = useState([])
    const [nature, setNature] = useState([])
    const [flower, setFlower] = useState([])

useEffect(() => 
    {
    fetch(dogAPI)
    .then(res => res.json())
    .then(data=> setDog(data.memes))

    fetch(bobaAPI)
    .then(res => res.json())
    .then(data=> setBoba(data.memes))

    fetch(catAPI)
    .then(res => res.json())
    .then(data=> setCat(data.memes))

    fetch(foodAPI)
    .then(res => res.json())
    .then(data=> setFood(data.memes))

    fetch(dessertAPI)
    .then(res => res.json())
    .then(data=> setDessert(data.memes))
    
    fetch(beachAPI)
    .then(res => res.json())
    .then(data=> setBeach(data.memes))

    fetch(natureAPI)
    .then(res => res.json())
    .then(data=> setNature(data.memes))
    
    fetch(flowerApi)
    .then(res => res.json())
    .then(data=> setFlower(data.memes))

},[])

return(
    
    <MyContext.Provider value={{dog,cat,boba,dessert,beach,nature,food,flower}}>

        <App />
        
    </MyContext.Provider>

)
}
 export default FetchBox;