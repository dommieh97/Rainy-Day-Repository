import React,{useEffect,useState} from 'react';
import App from './App';
import MyContext from './MyContext';
import { Routes, Route } from "react-router-dom";
import TopThing from './TopThing';
import DogBody from "./DogBody";
import CatBody from "./CatBody";
import BobaBody from "./BobaBody";
import BeachBody from "./BeachBody";
import DessertBody from "./DessertBody";
import NatureBody from "./NatureBody";
import FoodBody from "./FoodBody";
import FlowerBody from "./FlowerBody";
import UserStuff from './UserStuff';
import Communities from './Communities';
import Channels from './DogChannels';
import RayBody from './RayBody';
import VGBody from './VGBody';

// const rayAPI=      "https://localhost:3000/rays"; 
const dogAPI=      "https://meme-api.com/gimme/dogpictures/50"; 
const bobaAPI=     "https://meme-api.com/gimme/boba/50";
const catAPI=      "https://meme-api.com/gimme/catpictures/50";
const foodAPI=     "https://meme-api.com/gimme/FoodPorn/50";
const dessertAPI=  "https://meme-api.com/gimme/DessertPorn/50";
const beachAPI=    "https://meme-api.com/gimme/BeachPorn/50";
const natureAPI=   "https://meme-api.com/gimme/natureporn/50";
const flowerApi=   "https://meme-api.com/gimme/flowerporn/50";
const vgAPI=      "https://meme-api.com/gimme/gamecollecting/50";

function FetchBox()
 {
    const [ray, setRay] = useState([])
    const [dog, setDog] = useState([])
    const [boba, setBoba] = useState([])
    const [cat, setCat] = useState([])
    const [food, setFood] = useState([])
    const [dessert, setDessert] = useState([])
    const [beach, setBeach] = useState([])
    const [nature, setNature] = useState([])
    const [flower, setFlower] = useState([])
    const [vg, setVG] = useState([])
useEffect(() => 
    {
    // fetch(rayAPI)
    // .then(res => res.json())
    // .then(data=> setRay(data.memes))

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

    fetch(vgAPI)
    .then(res => res.json())
    .then(data=> setVG(data.memes))

},[])

return (
    <MyContext.Provider value ={{ ray,dog, cat, boba, dessert, beach, nature, food, flower,vg }}>
      <Routes>
        <Route element={
            <App>
                <UserStuff/>
                <Communities/>
                <TopThing/>
                <Channels/>
            </App>}>
            <Route path="/" element={<RayBody />} />
          <Route path="/Dog" element={<DogBody />} />
          <Route path="/Cat" element={<CatBody />} />
          <Route path="/Dessert" element={<DessertBody />} />
          <Route path="/Food" element={<FoodBody />} />
          <Route path="/Boba" element={<BobaBody />} />
          <Route path="/Nature" element={<NatureBody />} />
          <Route path="/Beach" element={<BeachBody />} />
          <Route path="/Flower" element={<FlowerBody/>}/>
          <Route path="/Video-Games" element={<VGBody/>}/>
        </Route>
      </Routes>
    </MyContext.Provider>
  );
}
 export default FetchBox;