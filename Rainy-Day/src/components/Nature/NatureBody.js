import React from "react";
import Cards from "../Cards";
import MyContext from "../MyContext";
function NatureBody()
{

const {apiData} = React.useContext(MyContext);

const allNature = apiData.map((nature) => <Cards community={nature} key={nature.postLink} />);
return(
    <div className="scrollbar" id="style-2">
        <div className="force-overflow">
            <div id="photos" style={{height:'33%', width:'100%'}}>
                {allNature}
            </div>  
        </div>
    </div>
        );
};
  
export default NatureBody;


