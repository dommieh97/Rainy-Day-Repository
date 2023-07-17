import React,{useContext} from "react";
import Cards from "./Cards";
import MyContext from "./MyContext";
function Body()
{

const {dog} = useContext(MyContext);
const allDogs = dog.map((dog) => <Cards dog={dog} key={dog.postLink} />);
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
  
export default Body;


//   {"postLink": "https://redd.it/14yntme",
//   "subreddit": "dogpictures",
//   "title": "This is my happy boy",
//   "url": "https://i.redd.it/ybrsesb33rbb1.jpg",
//   "nsfw": false,
//   "spoiler": false,
//   "author": "zxy22",
//   "ups": 15,}