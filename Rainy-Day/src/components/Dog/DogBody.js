import React, { useEffect } from "react";
import Cards from "../Cards";
import MyContext from "../MyContext";
import { useLocation } from "react-router-dom";

function DogBody({dog})
{
const location = useLocation();
const { setFirstEndPoint } = React.useContext(MyContext);
     
useEffect(() => {
    setFirstEndPoint(location.pathname);
});
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