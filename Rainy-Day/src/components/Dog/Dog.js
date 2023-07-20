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
  "Dog/german-shepherds",
  "Dog/corgis",
  "Dog/weeeenies",
  "Dog/alaskan-huskers",
  "Dog/Dogs-With-Hats",
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

  const endpoint = location.slice(1); 
  const validEndpoint = endpoints.includes(endpoint) ? endpoint : "good-puppers";

    switch (validEndpoint) {
      case 'Dog/german-shepherds':
        getMemes('germanshepherds', setGS);
        break;
      case 'Dog/corgis':
        getMemes('corgis', setCorgi);
        break;
      case 'Dog/weeeenies':
        getMemes('daschund', setHD);
        break;
      case 'Dog/alaskan-huskers':
        getMemes('husky', setHusky);
        break;
      case 'Dog/Dogs-With-Hats':
        getMemes('dogswearinghats', setDogHat);
        break;
      default:
        getMemes('dogpictures', setDog);
        break;
    }
    console.log(validEndpoint)

  }, [location]); 

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