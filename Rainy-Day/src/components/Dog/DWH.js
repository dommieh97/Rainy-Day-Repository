import React, { useEffect } from "react";
import Cards from "../Cards";
import MyContext from "../MyContext";
import { useLocation } from "react-router-dom";

function DWH({dogHat})
{
const location = useLocation();
const { setFirstEndPoint } = React.useContext(MyContext);
useEffect(() => {
    setFirstEndPoint(location.pathname);
});
const allDWH = dogHat.map((dogHat) => <Cards community={dogHat} key={dogHat.postLink} />);
return(
    <div className="scrollbar" id="style-1">
        <div className="force-overflow">
            <div id="photos" style={{height:'33%', width:'100%'}}>
                {allDWH}
            </div>  
        </div>
    </div>
        );
};
  
export default DWH;


//   {"postLink": "https://redd.it/14yntme",
//   "subreddit": "dogpictures",
//   "title": "This is my happy boy",
//   "url": "https://i.redd.it/ybrsesb33rbb1.jpg",
//   "nsfw": false,
//   "spoiler": false,
//   "author": "zxy22",
//   "ups": 15,}