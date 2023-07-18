import React from "react";
import Cards from "../Cards";
import MyContext from "../MyContext";
function RayBody()
{

const {apiData} = React.useContext(MyContext);

const allRays = apiData.map((ray) => <Cards community={ray} key={ray.postLink} />);
return(
    <div className="scrollbar" id="style-2">
        <div className="force-overflow">
            <div id="photos" style={{height:'33%', width:'100%'}}>
                {allRays}
            </div>  
        </div>
    </div>
        );
};
  
export default RayBody;


