import React, { useEffect } from "react";
import Cards from "../Cards";
import MyContext from "../MyContext";
import { useLocation } from "react-router-dom";

function Roses({flower})
{
const location = useLocation();
const { setFirstEndPoint } = React.useContext(MyContext);
const [roses,setRoses] = React.useState([])
useEffect(() => 
{
    fetch("https://meme-api.com/gimme/Roses/50")
    .then(r => r.json())
    .then(data => setRoses(data.memes))
}, []); 

useEffect(() => {
    setFirstEndPoint(location.pathname);
    });

const allFlowers = roses.map((roses) => <Cards community={roses} key={roses.postLink} />);
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
  
export default Roses;


