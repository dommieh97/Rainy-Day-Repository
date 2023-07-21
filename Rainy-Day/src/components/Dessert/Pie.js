import React, { useEffect } from "react";
import Cards from "../Cards";
import MyContext from "../MyContext";
import { useLocation } from "react-router-dom";

function Pie()
{
const [pie,setPie] = React.useState([])
const location = useLocation();
const { setFirstEndPoint } = React.useContext(MyContext);

useEffect(() => 
{
    fetch("https://meme-api.com/gimme/pie/50")
    .then(r => r.json())
    .then(data => setPie(data.memes))
}, []); 

useEffect(() => {
    setFirstEndPoint(location.pathname);
    });

const allDessert = pie.map((pie) => <Cards community={pie} key={pie.postLink} />);
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
  
export default Pie;


