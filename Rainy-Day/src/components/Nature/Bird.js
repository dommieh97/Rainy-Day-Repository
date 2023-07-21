import React, { useEffect } from "react";
import Cards from "../Cards";
import MyContext from "../MyContext";
import { useLocation } from "react-router-dom";

function Bird()
{
const location = useLocation();
const { setFirstEndPoint } = React.useContext(MyContext);
const [bird,setBird] = React.useState([])
useEffect(() => 
{
    fetch("https://meme-api.com/gimme/BirdPhotography/50")
    .then(r => r.json())
    .then(data => setBird(data.memes))
}, []); 

useEffect(() => {
    setFirstEndPoint(location.pathname);
    });
    
const allNature = bird.map((bird) => <Cards community={bird} key={bird.postLink} />);
return(
    <div className="scrollbar" id="style-2">
        <div className="force-overflow">
            <div id="photos" style={{height:'33%', width:'100%'}}>
                {allNature}
            </div>  
        </div>
    </div>
        );
};
  
export default Bird;


