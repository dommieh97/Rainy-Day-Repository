import React from "react";
import Cards from "../Cards";
import MyContext from "../MyContext";
function BobaBody()
{

const {apiData} = React.useContext(MyContext);

const allBoba = apiData.map((boba) => <Cards community={boba} key={boba.postLink} />);
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


