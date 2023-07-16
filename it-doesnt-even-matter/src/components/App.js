import React,{useState, useEffect} from'react';
import '../App.css';
import Body from './DogBody';
import UserStuff from './UserStuff';
import Channels from './Channels';
import TopThing from './TopThing';
import Communities from './Communities';
import MyContext from './MyContext';

 const dogAPI= "https://meme-api.com/gimme/dogpictures/50"; 
 const bobaAPI= "https://meme-api.com/gimme/boba/50";
 const catAPI= "https://meme-api.com/gimme/catpictures/50";
 const foodAPI= "https://meme-api.com/gimme/FoodPorn/50";
 const dessertAPI= "https://meme-api.com/gimme/DessertPorn/50";
 const beachAPI= "https://meme-api.com/gimme/BeachPorn/50";
 const natureAPI= "https://meme-api.com/gimme/natureporn/50";

//  const disneyAPI ="https://api.disneyapi.dev/character";


function App() {

const [dog, setDog] = useState([])
const [boba, setBoba] = useState([])
const [cat, setCat] = useState([])
const [food, setFood] = useState([])
const [dessert, setDessert] = useState([])
const [beach, setBeach] = useState([])
const [nature, setNature] = useState([])
// const [disney , setDisney] = useState([])

// useEffect(()=> {
//   fetch(disneyAPI)
//   .then(res => res.json())
//   .then (disneyData => setDisney(disneyData))
// },[])

useEffect(() => 
{
  fetch(dogAPI)
  .then(res => res.json())
  .then(data=> setDog(data.memes))
},[])

useEffect(() => 
{
  fetch(bobaAPI)
  .then(res => res.json())
  .then(data=> setBoba(data.memes))
},[])

useEffect(() => 
{
  fetch(catAPI)
  .then(res => res.json())
  .then(data=> setCat(data.memes))
},[])

useEffect(() => 
{
  fetch(foodAPI)
  .then(res => res.json())
  .then(data=> setFood(data.memes))
},[])

useEffect(() => 
{
  fetch(dessertAPI)
  .then(res => res.json())
  .then(data=> setDessert(data.memes))
},[])

useEffect(() => 
{
  fetch(beachAPI)
  .then(res => res.json())
  .then(data=> setBeach(data.memes))
},[])

useEffect(() => 
{
  fetch(natureAPI)
  .then(res => res.json())
  .then(data=> setNature(data.memes))
},[])

  return (
    <>
    <MyContext.Provider value={{dog,cat,boba,dessert,nature,food,beach}}>
      
    <div style={{ display: "flex", height: "100vh" }}>
          
          <div style={{ flex: "0 0 4vw", background: "#1e1f22", border: "solid" }} >
            <Communities />
          </div>

          <div style={{ flex: "0 0 12vw", background: "#2b2d31", border: "solid" }}
          >
            <div style={{border:'solid', height: "4vh" }}>
              <TopThing />
            </div>
            <div style={{ border:'solid',height: "84vh" }}>
              <Channels />
            </div>
            <div style={{border:'solid', height: "11vh" }}>
              <UserStuff />
            </div>
          </div>

          <div className="scrollbar" id="style-1" style={{overflowY:"scroll", flex: "1", backgroundColor:"#313338"}}>
            <Body />
          </div>
       
      </div>

    </MyContext.Provider>
    </>
  );
}



export default App;


