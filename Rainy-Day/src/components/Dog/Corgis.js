import React, { useEffect } from "react";
import Cards from "../Cards";
import MyContext from "../MyContext";
import { useLocation } from "react-router-dom";

function Corgis({corgi})
{
const location = useLocation();
const { setFirstEndPoint } = React.useContext(MyContext);
     
useEffect(() => {
    setFirstEndPoint(location.pathname);
});
const allCorgis = corgi.map((corgi) => <Cards community={corgi} key={corgi.postLink} />);
return(
    <div className="scrollbar" id="style-1">
        <div className="force-overflow">
            <div id="photos" style={{height:'33%', width:'100%'}}>
                {allCorgis}
            </div>  
        </div>
    </div>
        );
};
  
export default Corgis;


//   {"postLink": "https://redd.it/14yntme",
//   "subreddit": "dogpictures",
//   "title": "This is my happy boy",
//   "url": "https://i.redd.it/ybrsesb33rbb1.jpg",
//   "nsfw": false,
//   "spoiler": false,
//   "author": "zxy22",
//   "ups": 15,}