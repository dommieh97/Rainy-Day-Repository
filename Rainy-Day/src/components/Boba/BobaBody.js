import React, { useEffect } from "react";
import Cards from "../Cards";
import MyContext from "../MyContext";
import { useLocation } from "react-router-dom";

function BobaBody({boba})
{
const location = useLocation();
const { setFirstEndPoint } = React.useContext(MyContext);

useEffect(() => {
    setFirstEndPoint(location.pathname);
  });
  
const allBoba = boba.map((boba) => <Cards community={boba} key={boba.postLink} />);
return(
    <div className="scrollbar" id="style-2">
        <div className="force-overflow">
            <div id="photos" style={{height:'33%', width:'100%'}}>
                {allBoba}
            </div>  
        </div>
    </div>
        );
};
  
export default BobaBody;


