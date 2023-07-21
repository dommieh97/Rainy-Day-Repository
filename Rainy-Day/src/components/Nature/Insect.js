import React, { useEffect } from "react";
import Cards from "../Cards";
import MyContext from "../MyContext";
import { useLocation } from "react-router-dom";

function Insect()
{
const [insect,setInsect] = React.useState([])
const location = useLocation();
const { setFirstEndPoint } = React.useContext(MyContext);
  
useEffect(() => 
{
    fetch("https://meme-api.com/gimme/InsectPorn/50")
    .then(r => r.json())
    .then(data => setInsect(data.memes))
}, []); 

useEffect(() => {
    setFirstEndPoint(location.pathname);
    });
    
const allNature = insect.map((insect) => <Cards community={insect} key={insect.postLink} />);
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
  
export default Insect;


