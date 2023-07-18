import React from "react";
import Cards from "../Cards";
function BeachBody({beach})
{


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


