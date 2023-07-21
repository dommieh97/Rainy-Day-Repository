import React, { useEffect } from "react";
import Cards from "../Cards";
import MyContext from "../MyContext";
import { useLocation } from "react-router-dom";

function Crabs()
{
const location = useLocation();
const { setFirstEndPoint } = React.useContext(MyContext);
const [crabs, setCrabs] = React.useState([])

useEffect(() => 
{
fetch("https://meme-api.com/gimme/crabs/50")
.then(r => r.json())
.then(data => setCrabs(data.memes))
}, []); 

useEffect(() => {
    setFirstEndPoint(location.pathname);
  });
  
const allBeaches = crabs.map((crabs) => <Cards community={crabs} key={crabs.postLink} />);
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
  
export default Crabs;


