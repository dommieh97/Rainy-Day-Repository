import React, { useEffect } from "react";
import Cards from "../Cards";
import MyContext from "../MyContext";
import { useLocation } from "react-router-dom";

function Hibiscus()
{
const location = useLocation();
const { setFirstEndPoint } = React.useContext(MyContext);
const [hibiscus, setHibiscus] = React.useState([])
 
useEffect(() => 
{
    fetch("https://meme-api.com/gimme/Hibiscus/50")
    .then(r => r.json())
    .then(data => setHibiscus(data.memes))
}, []);

useEffect(() => {
    setFirstEndPoint(location.pathname);
    });

const allFlowers = hibiscus.map((hibiscus) => <Cards community={hibiscus} key={hibiscus.postLink} />);
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
  
export default Hibiscus;


