import React, { useEffect } from "react";
import Cards from "../Cards";
import MyContext from "../MyContext";
import { useLocation } from "react-router-dom";

function IceCream()
{
const [iceCream,setIceCream] = React.useState([])
const location = useLocation();
const { setFirstEndPoint } = React.useContext(MyContext);

useEffect(() => 
{
    fetch("https://meme-api.com/gimme/icecream/50")
    .then(r => r.json())
    .then(data => setIceCream(data.memes))
}, []); 

useEffect(() => {
    setFirstEndPoint(location.pathname);
    });

const allDessert = iceCream.map((iceCream) => <Cards community={iceCream} key={iceCream.postLink} />);
return(
    <div className="scrollbar" id="style-2">
        <div className="force-overflow">
            <div id="photos" style={{height:'33%', width:'100%'}}>
                {allDessert}
            </div>  
        </div>
    </div>
        );
};
  
export default IceCream;


