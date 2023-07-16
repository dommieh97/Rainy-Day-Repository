import React from "react";
import Cards from "./Cards";
import MyContext from "./MyContext";
function Body()
{

const {boba} = React.useContext(MyContext);

const allBoba = boba.map((boba) => <Cards boba={boba} key={boba.postLink} />);
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
  
export default Body;


