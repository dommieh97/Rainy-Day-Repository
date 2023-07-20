import React,{useState} from "react";
import App from "./App";
import MyContext from "./MyContext";
import { Routes, Route } from "react-router-dom";
import TopThing from "./TopThing";
import DogBody from "./Dog/DogBody";
import Dog from "./Dog/Dog";
import Cat from "./Cat/Cat";
import Boba from "./Boba/Boba";
import Beach from "./Beach/Beach";
import Dessert from "./Dessert/Dessert";
import Nature from "./Nature/Nature";
import Food from "./Food/Food";
import Flower from "./Flower/Flower";
import UserStuff from "./UserStuff";
import Communities from "./Communities";
import Channels from "./Channels";
import Ray from "./Home/Ray";
import VG from "./Video-Game/VG";
import CardDisplay from "./CardDisplay";
import GS from './Dog/GS';
import Corgis from './Dog/Corgis';
import DWH from './Dog/DWH';
import HotDog from './Dog/HotDog';
import Husky from './Dog/Husky';


function FetchBox() {
  const [ray, setRay] = useState([]);
const [displayData, setDisplayData] = useState({});
const [firstEndPoint,setFirstEndPoint] = useState("");
  return (
    <MyContext.Provider
      value={{displayData, setDisplayData, setFirstEndPoint, firstEndPoint, ray, setRay}}
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
          <Route path="/Home" element={<Ray/>} />
          {/* {apiData.map((post) => {
            return (
              <Route
                key={post.postLink}
                path={`${firstEndPoint}/${post.author}`}
                element={<CardDisplay data={post} />}
              />
            );
          })} */}
          <Route path="/Dog" element={<Dog />}>
          <Route path="/Dog/good-puppers" element={<DogBody />} />
          <Route path="/Dog/german-shepherds" element={<GS />} />
          <Route path="/Dog/corgis" element={<Corgis />} />
          <Route path="/Dog/weeeenies" element={<HotDog />} />
          <Route path="/Dog/alaskan-huskers" element={<Husky />} />
          <Route path="/Dog/Dogs-With-Hats" element={<DWH />} />
          </Route>
          <Route path={`${firstEndPoint}/:title`} element={<CardDisplay/>} />
          <Route path="/Cat" element={<Cat />} />
          <Route path="/Dessert" element={<Dessert />} />
          <Route path="/Food" element={<Food />} />
          <Route path="/Boba" element={<Boba />} />
          <Route path="/Nature" element={<Nature />} />
          <Route path="/Beach" element={<Beach />} />
          <Route path="/Flower" element={<Flower />} />
          <Route path="/Video-Games" element={<VG />} />
        </Route>
      </Routes>
    </MyContext.Provider>
  );
}
export default FetchBox;
