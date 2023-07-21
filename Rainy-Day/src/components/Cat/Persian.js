import React,{useEffect,useState} from 'react'
import Cards from "../Cards";
import MyContext from "../MyContext";
import { useLocation } from "react-router-dom";


function Persian() 
{
const [persian,setPersian] = useState([])
const location = useLocation();
const { setFirstEndPoint } = React.useContext(MyContext);


useEffect(() => 
{
fetch("https://meme-api.com/gimme/persiancat/50")
.then(r => r.json())
.then(data => setPersian(data.memes))
}, []); 

useEffect(() => {
    setFirstEndPoint(location.pathname);
  });

  const allCats = persian.map((persian) => (
    <Cards community={persian} key={persian.postLink} />
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

export default Persian;