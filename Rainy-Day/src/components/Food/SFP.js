import React, { useEffect, useState } from "react";
import Cards from "../Cards";
import MyContext from "../MyContext";
import { useLocation } from "react-router-dom";

function SFP()
{
const [sFP, setSFP] = useState([]);
const location = useLocation();
const { setFirstEndPoint } = React.useContext(MyContext);
 
useEffect(() => 
{
    fetch("https://meme-api.com/gimme/ShittyFoodPorn/50")
    .then(r => r.json())
    .then(data => setSFP(data.memes))
}, []); 

useEffect(() => {
    setFirstEndPoint(location.pathname);
    });

const allFood = sFP.map((sFP) => <Cards community={sFP} key={sFP.postLink} />);

return(
    <div className="scrollbar" id="style-2">
        <div className="force-overflow">
            <div id="photos" style={{height:'33%', width:'100%'}}>
                {allFood}
            </div>  
        </div>
    </div>
        );
};
  
export default SFP;


