import React, { useEffect,useState } from "react";
import Cards from "../Cards";
import MyContext from "../MyContext";
import { useLocation } from "react-router-dom";

function IFood()
{
const [iFood,setIFood] = useState([])
const location = useLocation();
const { setFirstEndPoint } = React.useContext(MyContext);
  
useEffect(() => 
{
    fetch("https://meme-api.com/gimme/ItalianFood/50")
    .then(r => r.json())
    .then(data => setIFood(data.memes))
}, []); 

useEffect(() => {
    setFirstEndPoint(location.pathname);
    });

const allFood = iFood.map((iFood) => <Cards community={iFood} key={iFood.postLink} />);

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
  
export default IFood;


