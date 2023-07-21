import React, { useEffect } from "react";
import Cards from "../Cards";
import MyContext from "../MyContext";
import { useLocation } from "react-router-dom";

function Sharks()
{
const location = useLocation();
const { setFirstEndPoint } = React.useContext(MyContext);
const [sharks,setSharks] = React.useState([])
useEffect(() => 
{
fetch("https://meme-api.com/gimme/sharks/50")
.then(r => r.json())
.then(data => setSharks(data.memes))
}, []); 

useEffect(() => {
    setFirstEndPoint(location.pathname);
  });
  
const allBeaches = sharks.map((sharks) => <Cards community={sharks} key={sharks.postLink} />);
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
  
export default Sharks;


