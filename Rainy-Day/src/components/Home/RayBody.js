import React from "react";
import Cards from "../Cards";

function RayBody({ray})
{

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


