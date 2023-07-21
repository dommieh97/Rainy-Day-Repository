import React, { useState, useEffect } from 'react';
import DogBody from './DogBody';


const dogAPI = "https://meme-api.com/gimme/dogpictures/50";

function Dog() {

  const [dog, setDog] = useState([]);

  useEffect(() => 
  {
      fetch(dogAPI)
      .then(r => r.json())
      .then(data => setDog(data.memes))
  }, []); 

  return (
    <>
      <DogBody dog={dog} />
    </>
  );
}

export default Dog;