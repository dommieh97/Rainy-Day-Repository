import React, { useEffect } from "react";
import Cards from "../Cards";
import MyContext from "../MyContext";
import { useLocation } from "react-router-dom";

function Orchids()
{
const location = useLocation();
const { setFirstEndPoint } = React.useContext(MyContext);
const [orchids, setOrchids] = React.useState([])

useEffect(() => 
{
    fetch("https://meme-api.com/gimme/orchids/50")
    .then(r => r.json())
    .then(data => setOrchids(data.memes))
}, []); 

useEffect(() => {
    setFirstEndPoint(location.pathname);
    });

const allFlowers = orchids.map((orchids) => <Cards community={orchids} key={orchids.postLink} />);
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
  
export default Orchids;


