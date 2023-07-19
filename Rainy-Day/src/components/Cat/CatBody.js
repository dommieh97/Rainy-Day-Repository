import React, { useEffect } from "react";
import Cards from "../Cards";
import MyContext from "../MyContext";
import { useLocation } from "react-router-dom";

function CatBody({ cat }) 
{
const location = useLocation();
const { setFirstEndPoint } = React.useContext(MyContext);
 
useEffect(() => {
    setFirstEndPoint(location.pathname);
  });

  const allCats = cat.map((cat) => (
    <Cards community={cat} key={cat.postLink} />
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

export default CatBody;