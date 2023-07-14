import React from'react';
import '../App.css';
import MyContext from './MyContext';
import Body from './Body';
import UserStuff from './UserStuff';
import Channels from './Channels';
import TopThing from './TopThing';
import Communities from './Communities';
// const pokemonAPI= "https://pokeapi.co/api/v2/pokemon"; 


function App() {
  return (
    <>
    <MyContext.Provider value={{}}>
      
    <div style={{ display: "flex", height: "100vh" }}>
          <div style={{ flex: "0 0 4vw", background: "#1e1f22", border: "solid" }} >
            <Communities />
          </div>

          <div style={{ flex: "0 0 12vw", background: "#2b2d31", border: "solid" }}
          >
            <div style={{ height: "4vh", border: "solid" }}>
              <TopThing />
            </div>
            <div style={{ height: "84vh", border: "solid" }}>
              <Channels />
            </div>
            <div style={{ height: "12vh" }}>
              <UserStuff />
            </div>
          </div>

          <div style={{ flex: "1", background: "#313338", border: "solid" }}>
            <Body />
          </div>
        </div>


    </MyContext.Provider>
    </>
  );
}



export default App;


