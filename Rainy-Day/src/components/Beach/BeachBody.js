import React, { useEffect } from "react";
import Cards from "../Cards";
import MyContext from "../MyContext";
import { useLocation } from "react-router-dom";

function BeachBody({beach})
{
const location = useLocation();
const { setFirstEndPoint } = React.useContext(MyContext);

useEffect(() => {
    setFirstEndPoint(location.pathname);
  });
  
const allBeaches = beach.map((beach) => <Cards community={beach} key={beach.postLink} />);
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
  
export default BeachBody;


