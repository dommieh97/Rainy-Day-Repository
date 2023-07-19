import React, { useEffect } from "react";
import Cards from "../Cards";
import MyContext from "../MyContext";
import { useLocation } from "react-router-dom";

function VGBody({vg})
{
const location = useLocation();
const { setFirstEndPoint } = React.useContext(MyContext);
     
useEffect(() => {
    setFirstEndPoint(location.pathname);
    });

const allVG = vg.map((vg) => <Cards community={vg} key={vg.postLink} />);
return(
    <div className="scrollbar" id="style-2">
        <div className="force-overflow">
            <div id="photos" style={{height:'33%', width:'100%'}}>
                {allVG}
            </div>  
        </div>
    </div>
        );
};
  
export default VGBody;


