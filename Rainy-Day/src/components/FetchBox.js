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
import GS from './Dog/GS';
import Corgis from './Dog/Corgis';
import DWH from './Dog/DWH';
import HotDog from './Dog/HotDog';
import Husky from './Dog/Husky';
import CSU from './Cat/CSU';
import Persian from './Cat/Persian';
import SF from './Cat/SF';
import SH from './Cat/SH';
import Siamese from './Cat/Siamese';
import Sphynx from './Cat/Sphynx';
import NotBoba from './Boba/NotBoba';
import Bread from './Food/Bread';
import IFood from './Food/IFood';
import Ramen from './Food/Ramen';
import SFP from './Food/SFP';
import VFood from './Food/VFood';
import Welcome from './Welcome';  
import CakeDec from "./Dessert/CakeDec";
import CupCakes from "./Dessert/CupCakes";
import IceCream from "./Dessert/IceCream";
import Macarons from "./Dessert/Macarons";
import Pie from "./Dessert/Pie";
import Crabs from "./Beach/Crabs";
import Sharks from "./Beach/Sharks"
import SP from "./Beach/SP";
import Turtles from "./Beach/Turtles";
import UWP from "./Beach/UWP";
import Bird from "./Nature/Bird";
import Insect from "./Nature/Insect";
import Mushies from "./Nature/Mushies";
import Hibiscus from "./Flower/Hibiscus";
import Hydrangeas from "./Flower/Hydrangeas";
import Orchids from "./Flower/Orchids";
import Roses from "./Flower/Roses";
import Sunflowers from "./Flower/Sunflowers";
import AC from "./Video-Game/AC";
import GI from "./Video-Game/GI";
import HSR from "./Video-Game/HSR";
import LOL from "./Video-Game/LOL";
import Persona from "./Video-Game/Persona";
import Pokemon from "./Video-Game/Pokemon";


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
          <Route path= "/" element={<Welcome/>} />
          <Route path="*" element={<Welcome/>}/>
          <Route path="/Home" element={<Ray/>} />
          <Route path={`${firstEndPoint}/:title`} element={<CardDisplay/>} />
          
          <Route path="/Dog" element={<Dog />}/>
          <Route path="/Dog/good-puppers" element={<Dog />} />
          <Route path="/Dog/german-shepherds" element={<GS />} />
          <Route path="/Dog/corgis" element={<Corgis />} />
          <Route path="/Dog/weeeenies" element={<HotDog />} />
          <Route path="/Dog/alaskan-huskers" element={<Husky />} />
          <Route path="/Dog/Dogs-With-Hats" element={<DWH />} />
          
          <Route path="/Cat" element={<Cat />} />
          <Route path="/Cat/good-kitties" element={<Cat />} />
          <Route path="/Cat/shorthairs" element={<SH />} />
          <Route path="/Cat/persians" element={<Persian />} />
          <Route path="/Cat/baldies" element={<Sphynx />} />
          <Route path="/Cat/siameses" element={<Siamese />} />
          <Route path="/Cat/scottish-fold" element={<SF />} />
          <Route path="/Cat/cats-standing" element={<CSU />} />

          <Route path="/Dessert" element={<Dessert />} />
          <Route path="/Dessert/desserts" element={<Dessert />} />
          <Route path="/Dessert/smol-cake" element={<CupCakes />} />
          <Route path="/Dessert/cake-dress-up" element={<CakeDec />} />
          <Route path="/Dessert/melty-yums" element={<IceCream />} />
          <Route path="/Dessert/ma-macarons" element={<Macarons />} />
          <Route path="/Dessert/sfw-pies-only" element={<Pie />} />


          <Route path="/Food" element={<Food />} />
          <Route path="/Food/food" element={<Food />} />
          <Route path="/Food/bread" element={<Bread />} />
          <Route path="/Food/Italiano" element={<IFood />} />
          <Route path="/Food/ramennnnnnn" element={<Ramen />} />
          <Route path="/Food/is-that-even-edible" element={<SFP />} />
          <Route path="/Food/voigan" element={<VFood />} />

          <Route path="/Boba" element={<Boba />} />
          <Route path="/Boba/boba" element={<Boba />} />
          <Route path="/Boba/not-boba-tea" element={<NotBoba />} />


          <Route path="/Nature" element={<Nature />} />
          <Route path="/Nature/buggies" element={<Insect />} />
          <Route path="/Nature/nature" element={<Nature />} />
          <Route path="/Nature/mushies" element={<Mushies />} />
          <Route path="/Nature/birbs" element={<Bird />} />


          <Route path="/Beach" element={<Beach />} />
          <Route path="/Beach/beach" element={<Beach />} />
          <Route path="/Beach/underwater-funsies" element={<UWP />} />
          <Route path="/Beach/surfs-up-not-the-movie" element={<SP />} />
          <Route path="/Beach/toitles" element={<Turtles />} />
          <Route path="/Beach/mr-krabs" element={<Crabs />} />
          <Route path="/Beach/shoiks" element={<Sharks />} />


          <Route path="/Flower" element={<Flower />} />
          <Route path="/Flower/flowers" element={<Flower />} />
          <Route path="/Flower/rosies" element={<Roses />} />
          <Route path="/Flower/sunny" element={<Sunflowers />} />
          <Route path="/Flower/orcheed" element={<Orchids />} />
          <Route path="/Flower/chibiscus" element={<Hibiscus />} />
          <Route path="/Flower/hydrpanges" element={<Hydrangeas />} />



          <Route path="/Video-Games" element={<VG />} />
          <Route path="/Video-Games/games" element={<VG />} />
          <Route path="/Video-Games/animal-crossing" element={<AC />} />
          <Route path="/Video-Games/genshin-impact" element={<GI />} />
          <Route path="/Video-Games/league" element={<LOL />} />
          <Route path="/Video-Games/honkai" element={<HSR />} />
          <Route path="/Video-Games/persona" element={<Persona />} />
          <Route path="/Video-Games/pokemon" element={<Pokemon />} />


        </Route>
      </Routes>
    </MyContext.Provider>
  );
}
export default FetchBox;
