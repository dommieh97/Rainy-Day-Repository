import React, { useState, useEffect } from 'react';
import Cards from "../Cards";
import MyContext from "../MyContext";
import { useLocation } from "react-router-dom";

function HotDog()
{

const [hD, setHD] = useState([]);
const location = useLocation();
const { setFirstEndPoint } = React.useContext(MyContext);
 
useEffect(() => 
{
    fetch("https://meme-api.com/gimme/daschund/50")
    .then(r => r.json())
    .then(data => setHD(data.memes))
}, []); 

useEffect(() => {
    setFirstEndPoint(location.pathname);
});
const allHotDogs = hD.map((hD) => <Cards community={hD} key={hD.postLink} />);
return(
    <div className="scrollbar" id="style-1">
        <div className="force-overflow">
            <div id="photos" style={{height:'33%', width:'100%'}}>
                {allHotDogs}
            </div>  
        </div>
    </div>
        );
};
  
export default HotDog;


//   {"postLink": "https://redd.it/14yntme",
//   "subreddit": "dogpictures",
//   "title": "This is my happy boy",
//   "url": "https://i.redd.it/ybrsesb33rbb1.jpg",
//   "nsfw": false,
//   "spoiler": false,
//   "author": "zxy22",
//   "ups": 15,}