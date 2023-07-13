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
      
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', height: "100vh",}}>

      <div style={{border:"solid",gridColumn: 1, width:'4vw', background:'green'}}>
        <Communities/>
        </div>

      <div style={{gridColumn: 2, width:"12vw", background:'pink'}}>

            <div style={{gridRow: 1, height:"4vh",border:"solid"}}>
              <TopThing/>
              </div>
            <div style={{gridRow: 2, height:"84vh", border:"solid"}}>
              <Channels/>
            </div>
            <div style={{gridRow: 3 ,height:"12vh",border:"solid"}}>
              <UserStuff/>
            </div>
            
      </div>

      <div style={{border:"solid", gridColumn: 3,width:"84vw",background:'teal'}}><Body/></div>
    </div>


    </MyContext.Provider>
    </>
  );
}



export default App;


