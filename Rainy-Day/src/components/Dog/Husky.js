import React, { useEffect } from "react";
import Cards from "../Cards";
import MyContext from "../MyContext";
import { useLocation } from "react-router-dom";

function Husky({husky})
{
const location = useLocation();
const { setFirstEndPoint } = React.useContext(MyContext);
     
useEffect(() => {
    setFirstEndPoint(location.pathname);
});
const allHuskies = husky.map((husky) => <Cards community={husky} key={husky.postLink} />);
return(
    <div className="scrollbar" id="style-1">
        <div className="force-overflow">
            <div id="photos" style={{height:'33%', width:'100%'}}>
                {allHuskies}
            </div>  
        </div>
    </div>
        );
};
  
export default Husky;


//   {"postLink": "https://redd.it/14yntme",
//   "subreddit": "dogpictures",
//   "title": "This is my happy boy",
//   "url": "https://i.redd.it/ybrsesb33rbb1.jpg",
//   "nsfw": false,
//   "spoiler": false,
//   "author": "zxy22",
//   "ups": 15,}