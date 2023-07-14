import React from "react";
import Cards from "./Cards";
import CardGroup from 'react-bootstrap/CardGroup';
function Body({dog})
{
const newArray = []
const allDogs = dog.map((dog) => <Cards dog={dog} key={dog.postLink} />);
return(
        <CardGroup style={{display:'inline-flex'}} itemsPerRow={4}>
            {allDogs}
        </CardGroup>  
          
        );
};
  
export default Body;


//   {"postLink": "https://redd.it/14yntme",
//   "subreddit": "dogpictures",
//   "title": "This is my happy boy",
//   "url": "https://i.redd.it/ybrsesb33rbb1.jpg",
//   "nsfw": false,
//   "spoiler": false,
//   "author": "zxy22",
//   "ups": 15,}