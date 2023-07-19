import React, { useEffect } from "react";
import Cards from "../Cards";
import MyContext from "../MyContext";
import { useLocation } from "react-router-dom";

function RayBody({ray})
{
const location = useLocation();
const { setFirstEndPoint } = React.useContext(MyContext);
     
useEffect(() => {
    setFirstEndPoint(location.pathname);
    });
 const allRays = ray.map((ray) => <Cards community={ray} key={ray.postLink} />);
return(
     <div className="scrollbar" id="style-2">
         <div className="force-overflow">
             <div id="photos" style={{height:'33%', width:'100%'}}>
                 {allRays}
             </div>  
         </div>
     </div>
        )
};
  
export default RayBody;


