import React, { useEffect } from "react";
import Cards from "../Cards";
import MyContext from "../MyContext";
import { useLocation } from "react-router-dom";

function UWP()
{
const [uWP, setUWP] = React.useState([])
const location = useLocation();
const { setFirstEndPoint } = React.useContext(MyContext);

useEffect(() => 
{
    fetch("https://meme-api.com/gimme/underwaterphotography/50")
    .then(r => r.json())
    .then(data => setUWP(data.memes))
}, []); 

useEffect(() => {
    setFirstEndPoint(location.pathname);
  });
  
const allBeaches = uWP.map((uWP) => <Cards community={uWP} key={uWP.postLink} />);
return(
    <div className="scrollbar" id="style-2">
        <div className="force-overflow">
            <div id="photos" style={{height:'33%', width:'100%'}}>
                {allBeaches}
            </div>  
        </div>
    </div>
        );
};
  
export default UWP;


