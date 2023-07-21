import React, { useEffect } from "react";
import Cards from "../Cards";
import MyContext from "../MyContext";
import { useLocation } from "react-router-dom";

function Hydrangeas()
{
const location = useLocation();
const { setFirstEndPoint } = React.useContext(MyContext);
const [hydrangeas, setHydrangeas] = React.useState([])

useEffect(() => 
{
    fetch("https://meme-api.com/gimme/hydrangeas/50")
    .then(r => r.json())
    .then(data => setHydrangeas(data.memes))
}, []); 

useEffect(() => {
    setFirstEndPoint(location.pathname);
    });

const allFlowers = hydrangeas.map((hydrangeas) => <Cards community={hydrangeas} key={hydrangeas.postLink} />);
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
  
export default Hydrangeas;


