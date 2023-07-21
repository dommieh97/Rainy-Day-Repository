import React, { useEffect } from "react";
import Cards from "../Cards";
import MyContext from "../MyContext";
import { useLocation } from "react-router-dom";

function Turtles()
{
const location = useLocation();
const { setFirstEndPoint } = React.useContext(MyContext);

const [turtles, setTurtles] = React.useState([])

useEffect(() => 
{
    fetch("https://meme-api.com/gimme/seaturtles/50")
    .then(r => r.json())
    .then(data => setTurtles(data.memes))
}, []); 

useEffect(() => {
    setFirstEndPoint(location.pathname);
  });
  
const allBeaches = turtles.map((turtles) => <Cards community={turtles} key={turtles.postLink} />);
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
  
export default Turtles;


