import React from "react";
import Cards from "../Cards";
function DogBody({dog})
{

const allDogs = dog.map((dog) => <Cards community={dog} key={dog.postLink} />);
return(
    <div className="scrollbar" id="style-1">
        <div className="force-overflow">
            <div id="photos" style={{height:'33%', width:'100%'}}>
                {allDogs}
            </div>  
        </div>
    </div>
        );
};
  
export default DogBody;


//   {"postLink": "https://redd.it/14yntme",
//   "subreddit": "dogpictures",
//   "title": "This is my happy boy",
//   "url": "https://i.redd.it/ybrsesb33rbb1.jpg",
//   "nsfw": false,
//   "spoiler": false,
//   "author": "zxy22",
//   "ups": 15,}