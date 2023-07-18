import React, { useEffect, useState } from "react";
import App from "./App";
import MyContext from "./MyContext";
import { Routes, Route, useLocation } from "react-router-dom";
import TopThing from "./TopThing";
import DogBody from "./Dog/DogBody";
import CatBody from "./Cat/CatBody";
import BobaBody from "./Boba/BobaBody";
import BeachBody from "./Beach/BeachBody";
import DessertBody from "./Dessert/DessertBody";
import NatureBody from "./Nature/NatureBody";
import FoodBody from "./Food/FoodBody";
import FlowerBody from "./Flower/FlowerBody";
import UserStuff from "./UserStuff";
import Communities from "./Communities";
import Channels from "./Dog/DogChannels";
import RayBody from "./Home/RayBody";
import VGBody from "./Video-Game/VGBody";


const rayAPI = "https://localhost:4000/rays";
const dogAPI = "https://meme-api.com/gimme/dogpictures/50";
const bobaAPI = "https://meme-api.com/gimme/boba/50";
const catAPI = "https://meme-api.com/gimme/catpictures/50";
const foodAPI = "https://meme-api.com/gimme/FoodPorn/50";
const dessertAPI = "https://meme-api.com/gimme/DessertPorn/50";
const beachAPI = "https://meme-api.com/gimme/BeachPorn/50";
const natureAPI = "https://meme-api.com/gimme/natureporn/50";
const flowerApi = "https://meme-api.com/gimme/flowerporn/50";
const vidgAPI = "https://meme-api.com/gimme/gamecollecting/50";

function FetchBox() {
  const [apiData, setApiData] = useState([])
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
      vid: vidgAPI,
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
          if (matchingKey === "") {
            setApiData(data.rays);
          } else if (matchingKey === "dog") {
            setApiData(data.memes);
          } else if (matchingKey === "bob") {
            setApiData(data.memes);
          } else if (matchingKey === "cat") {
            setApiData(data.memes);
          } else if (matchingKey === "foo") {
            setApiData(data.memes);
          } else if (matchingKey === "des") {
            setApiData(data.memes);
          } else if (matchingKey === "bea") {
            setApiData(data.memes);
          } else if (matchingKey === "nat") {
            setApiData(data.memes);
          } else if (matchingKey === "flo") {
            setApiData(data.memes);
          } else if (matchingKey === "vid") {
            setApiData(data.memes);
          }
        });
    }
  }, [location]);

  return (
    <MyContext.Provider
      value={{ apiData }}
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