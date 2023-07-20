import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import DogBody from './DogBody';
import GS from './GS';
import Corgis from './Corgis';
import DWH from './DWH';
import HotDog from './HotDog';
import Husky from './Husky';

const endpoints = [
  "good-puppers",
  "german-shepherds",
  "corgis",
  "weeeenies",
  "alaskan-huskers",
  "Dogs-With-Hats",
];

const dogAPI = "https://meme-api.com/gimme/";

function Dog() {
  const location = useLocation().pathname;

  const [dog, setDog] = useState([]);
  const [gS, setGS] = useState([]);
  const [corgi, setCorgi] = useState([]);
  const [hD, setHD] = useState([]);
  const [husky, setHusky] = useState([]);
  const [dogHat, setDogHat] = useState([]);

  useEffect(() => {
    const getMemes = async (endpoint, setter) => {
      const response = await fetch(`${dogAPI}${endpoint}/50`);
      const data = await response.json();
      setter(data.memes);
    };

    // Extract endpoint from location.pathname
    const endpoint = location.slice(1); // Use the last part of the path as the endpoint
  const validEndpoint = endpoints.includes(endpoint) ? endpoint : "good-puppers";

    switch (validEndpoint) {
      case 'german-shepherds':
        getMemes('germanshepherds', setGS);
        break;
      case 'corgis':
        getMemes('corgis', setCorgi);
        break;
      case 'weeeenies':
        getMemes('daschund', setHD);
        break;
      case 'alaskan-huskers':
        getMemes('husky', setHusky);
        break;
      case 'Dogs-With-Hats':
        getMemes('dogswearinghats', setDogHat);
        break;
      default:
        // For the default case, fetch "good-puppers"
        getMemes('dogpictures', setDog);
        break;
    }
  }, [location]); // Trigger the effect whenever the location changes

  return (
    <>
      <DogBody dog={dog} />
      <Corgis corgi={corgi} />
      <DWH dogHat={dogHat} />
      <GS gS={gS} />
      <HotDog hD={hD} />
      <Husky husky={husky} />
    </>
  );
}

export default Dog;