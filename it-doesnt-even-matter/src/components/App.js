import React,{useState, useEffect} from'react';
import '../App.css';
import MyContext from './MyContext';
import Body from './Body';
import UserStuff from './UserStuff';
import Channels from './Channels';
import TopThing from './TopThing';
import Communities from './Communities';

 const dogAPI= "https://meme-api.com/gimme/dogpictures/8"; 
 const disneyAPI ="https://api.disneyapi.dev/character";


function App() {

const [dog, setDog] = useState([])
const [disney , setDisney] = useState([])

useEffect(()=> {
  fetch(disneyAPI)
  .then(res => res.json())
  .then (disneyData => setDisney(disneyData))
},[])

useEffect(() => 
{
  fetch(dogAPI)
  .then(res => res.json())
  .then(data=> setDog(data.memes))
},[])

  return (
    <>
    <MyContext.Provider value={{}}>
      
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

          <div style={{ flex: "1", background: "#313338", border: "solid" }}>
            <Body dog={dog}/>
          </div>
        </div>


    </MyContext.Provider>
    </>
  );
}



export default App;


