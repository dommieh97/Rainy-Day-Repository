import React,{useState} from "react";
import App from "./App";
import MyContext from "./MyContext";
import { Routes, Route } from "react-router-dom";
import TopThing from "./TopThing";
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


function FetchBox() {
const [displayData, setDisplayData] = useState({});
const [firstEndPoint,setFirstEndPoint] = useState("");
  return (
    <MyContext.Provider
      value={{displayData, setDisplayData, setFirstEndPoint, firstEndPoint}}
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
          <Route path="/" element={<Ray/>} />
          {/* {apiData.map((post) => {
            return (
              <Route
                key={post.postLink}
                path={`${firstEndPoint}/${post.author}`}
                element={<CardDisplay data={post} />}
              />
            );
          })} */}
          <Route path="/Dog" element={<Dog />} />
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
