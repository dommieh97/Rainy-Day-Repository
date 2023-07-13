import logo from '../logo.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

import React, { useEffect, useState } from'react';
import '../App.css';
import MyContext from './MyContext';
import Body from './Body';
import UserStuff from './UserStuff';
import Channels from './Channels';
import TopThing from './TopThing';
import Communities from './Communities';
const pokemonAPI= "https://pokeapi.co/api/v2/pokemon"; 


function App() {
  return (
    <>
    <MyContext.Provider value={{}}>
      
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', height: "100vh",}}>

      <div style={{border:"solid",gridColumn: 1, width:'4vw'}}>
        <Communities/>
        </div>

      <div style={{gridColumn: 2, width:"12vw"}}>

            <div style={{gridRow: 1, height:"8vh",border:"solid"}}>
              <TopThing/>
              </div>
            <div style={{gridRow: 2, height:"80vh", border:"solid"}}>
              <Channels/>
            </div>
            <div style={{gridRow: 3 ,height:"12vh",border:"solid"}}>
              <UserStuff/>
            </div>
            
      </div>

      <div style={{border:"solid", gridColumn: 3,width:"84vw"}}><Body/></div>
    </div>


    </MyContext.Provider>
    </>
  );
}



export default App;


{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          ABORT THE MISSION PAUL
        </a>
      </header> */}

       {/* <div class="container-fluid">
      <div class="row" style={{height: 100}}>

      <div class="col-sm-1" style={{backgroundColor:"green",width:'3vw', height:"100vh", zindex:3}}><Communities /></div>
      <div class="col-sm-2" style={{backgroundColor:"green",width:"13vw",height:"100vh"}}>


        <div class="container">
          <div div class="row row-cols-auto">

           <div style={{backgroundColor:"violet", width:"13vw", height:"8vh"} }>
           <TopThing />
           </div>
            
           
            <div style={{backgroundColor:"red", width:"100%",height:"80vh", position:'absolute'}}><Channels /></div>
            <div style={{backgroundColor:"magenta", width:"100%", height:"12vh", bottom:'0vh', position:'absolute'}}><UserStuff /></div>
          </div>
        </div>
    
      </div>
      
      <div class="col-sm-9" style={{backgroundColor:"teal",width:"84vw", height:"100vh"}}>
        <Body />
      </div>
  </div>

  


      
      
      
    </div> */}