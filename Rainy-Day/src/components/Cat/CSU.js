import React,{useEffect,useState} from 'react'
import Cards from "../Cards";
import MyContext from "../MyContext";
import { useLocation } from "react-router-dom";


function CSU() 
{

const [cSU,setCSU] = useState([])
const location = useLocation();
const { setFirstEndPoint } = React.useContext(MyContext);


fetch("https://meme-api.com/gimme/CatsStandingUp/50")
    .then(r => r.json())
    .then(data => setCSU(data.memes))


useEffect(() => {
    setFirstEndPoint(location.pathname);
  });

  const allCats = cSU.map((cSU) => (
    <Cards community={cSU} key={cSU.postLink} />
  ));

  return (
    <div className="scrollbar" id="style-2">
      <div className="force-overflow">
        <div id="photos" style={{ height: "33%", width: "100%" }}>
          {allCats}
        </div>
      </div>
    </div>
  );
}

export default CSU;