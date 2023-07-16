import React from "react";
import Cards from "./Cards";
import MyContext from "./MyContext";
function Body()
{

const {cat} = React.useContext(MyContext);

const allCats = cat.map((cat) => <Cards cat={cat} key={cat.postLink} />);
return(
    <div className="scrollbar" id="style-2">
        <div className="force-overflow">
            <div id="photos" style={{height:'33%', width:'100%'}}>
                {allCats}
            </div>  
        </div>
    </div>
        );
};
  
export default Body;


