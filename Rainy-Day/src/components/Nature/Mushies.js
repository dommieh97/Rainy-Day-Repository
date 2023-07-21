import React, { useEffect } from "react";
import Cards from "../Cards";
import MyContext from "../MyContext";
import { useLocation } from "react-router-dom";

function Mushies()
{
const location = useLocation();
const { setFirstEndPoint } = React.useContext(MyContext);
const [mushies, setMushies] = React.useState([])
useEffect(() => 
{
    fetch("https://meme-api.com/gimme/MushroomPorn/50")
    .then(r => r.json())
    .then(data => setMushies(data.memes))
}, []); 

useEffect(() => {
    setFirstEndPoint(location.pathname);
    });
    
const allNature = mushies.map((mushies) => <Cards community={mushies} key={mushies.postLink} />);
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
  
export default Mushies;


