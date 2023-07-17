import React, { useEffect, useState } from "react";
import App from "./App";
import MyContext from "./MyContext";
import { Routes, Route, useLocation } from "react-router-dom";
import TopThing from "./TopThing";
import DogBody from "./DogBody";
import CatBody from "./CatBody";
import BobaBody from "./BobaBody";
import BeachBody from "./BeachBody";
import DessertBody from "./DessertBody";
import NatureBody from "./NatureBody";
import FoodBody from "./FoodBody";
import FlowerBody from "./FlowerBody";
import UserStuff from "./UserStuff";
import Communities from "./Communities";
import Channels from "./Channels";
import RayBody from "./RayBody";
import VGBody from "./VGBody";

const rayAPI = "https://localhost:3000/rays";
const dogAPI = "https://meme-api.com/gimme/dogpictures/20";
const bobaAPI = "https://meme-api.com/gimme/boba/20";
const catAPI = "https://meme-api.com/gimme/catpictures/20";
const foodAPI = "https://meme-api.com/gimme/FoodPorn/20";
const dessertAPI = "https://meme-api.com/gimme/DessertPorn/20";
const beachAPI = "https://meme-api.com/gimme/BeachPorn/20";
const natureAPI = "https://meme-api.com/gimme/natureporn/20";
const flowerApi = "https://meme-api.com/gimme/flowerporn/20";
const vidgAPI = "https://meme-api.com/gimme/gamecollecting/20";

const API = [
  dogAPI,
  bobaAPI,
  catAPI,
  foodAPI,
  dessertAPI,
  beachAPI,
  natureAPI,
  flowerApi,
  vidgAPI,
  rayAPI,
];

function FetchBox() {
  const [ray, setRay] = useState([]);
  const [dog, setDog] = useState([]);
  const [boba, setBoba] = useState([]);
  const [cat, setCat] = useState([]);
  const [food, setFood] = useState([]);
  const [dessert, setDessert] = useState([]);
  const [beach, setBeach] = useState([]);
  const [nature, setNature] = useState([]);
  const [flower, setFlower] = useState([]);
  const [vg, setVG] = useState([]);
  const [apiData, setApiData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.toLowerCase();
    const apiDictionary = {
      dog: dogAPI,
      bob: bobaAPI,
      cat: catAPI,
      foo: foodAPI,
      des: dessertAPI,
      bea: beachAPI,
      nat: natureAPI,
      flo: flowerApi,
      vga: vidgAPI,
      ray: rayAPI,
    };

    const matchingKey = Object.keys(apiDictionary).find((key) =>
      path.includes(key)
    );

    if (matchingKey) {
      const selectedAPI = apiDictionary[matchingKey];
      fetch(selectedAPI)
        .then((res) => res.json())
        .then((data) => {
          if (matchingKey === "ray") {
            setRay(data.memes);
          } else if (matchingKey === "dog") {
            setApiData(data.memes);
          } else if (matchingKey === "bob") {
            setBoba(data.memes);
          } else if (matchingKey === "cat") {
            setApiData(data.memes);
          } else if (matchingKey === "foo") {
            setFood(data.memes);
          } else if (matchingKey === "des") {
            setDessert(data.memes);
          } else if (matchingKey === "bea") {
            setBeach(data.memes);
          } else if (matchingKey === "nat") {
            setNature(data.memes);
          } else if (matchingKey === "flo") {
            setFlower(data.memes);
          } else if (matchingKey === "vga") {
            setVG(data.memes);
          }
        });
    }
  }, [location]);

  return (
    <MyContext.Provider
      value={{
        apiData,
        ray,
        dog,
        cat,
        boba,
        dessert,
        beach,
        nature,
        food,
        flower,
        vg,
      }}
    >
      <Routes>
        <Route
          element={
            <App>
              <UserStuff />
              <Communities />
              <TopThing />
              <Channels />
            </App>
          }
        >
          <Route path="/" element={<RayBody />} />
          <Route path="/Dog" element={<DogBody />} />
          <Route path={`/Dog`} element={<DogBody />} />
          <Route path="/Cat" element={<CatBody />} />
          <Route path="/Dessert" element={<DessertBody />} />
          <Route path="/Food" element={<FoodBody />} />
          <Route path="/Boba" element={<BobaBody />} />
          <Route path="/Nature" element={<NatureBody />} />
          <Route path="/Beach" element={<BeachBody />} />
          <Route path="/Flower" element={<FlowerBody />} />
          <Route path="/Video-Games" element={<VGBody />} />
        </Route>
      </Routes>
    </MyContext.Provider>
  );
}
export default FetchBox;
