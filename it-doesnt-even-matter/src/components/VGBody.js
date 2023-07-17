import React from "react";
import Cards from "./Cards";
import MyContext from "./MyContext";
function VGBody()
{

const {vg} = React.useContext(MyContext);


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


