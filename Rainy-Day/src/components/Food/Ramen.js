import React, { useEffect,useState } from "react";
import Cards from "../Cards";
import MyContext from "../MyContext";
import { useLocation } from "react-router-dom";

function Ramen()
{
const [ramen,setRamen]= useState([])
const location = useLocation();
const { setFirstEndPoint } = React.useContext(MyContext);
  
useEffect(() => 
{
    fetch("https://meme-api.com/gimme/Ramen/50")
    .then(r => r.json())
    .then(data => setRamen(data.memes))
}, []); 


useEffect(() => {
    setFirstEndPoint(location.pathname);
    });

const allFood = ramen.map((ramen) => <Cards community={ramen} key={ramen.postLink} />);

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
  
export default Ramen;


