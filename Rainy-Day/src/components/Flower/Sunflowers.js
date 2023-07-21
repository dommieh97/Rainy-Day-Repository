import React, { useEffect } from "react";
import Cards from "../Cards";
import MyContext from "../MyContext";
import { useLocation } from "react-router-dom";

function Sunflowers()
{
const location = useLocation();
const { setFirstEndPoint } = React.useContext(MyContext);
const [sunflowers, setSunflowers] = React.useState([])

useEffect(() => 
{
    fetch("https://meme-api.com/gimme/sunflowers/50")
    .then(r => r.json())
    .then(data => setSunflowers(data.memes))
}, []); 

useEffect(() => {
    setFirstEndPoint(location.pathname);
    });

const allFlowers = sunflowers.map((sunflowers) => <Cards community={sunflowers} key={sunflowers.postLink} />);
return(
    <div className="scrollbar" id="style-2">
        <div className="force-overflow">
            <div id="photos" style={{height:'33%', width:'100%'}}>
                {allFlowers}
            </div>  
        </div>
    </div>
        );
};
  
export default Sunflowers;


