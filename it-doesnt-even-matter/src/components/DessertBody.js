import React from "react";
import Cards from "./Cards";
import MyContext from "./MyContext";
function Body()
{
const {dessert} = React.useContext(MyContext);


const allDessert = dessert.map((dessert) => <Cards dessert={dessert} key={dessert.postLink} />);
return(
    <div className="scrollbar" id="style-2">
        <div className="force-overflow">
            <div id="photos" style={{height:'33%', width:'100%'}}>
                {allDessert}
            </div>  
        </div>
    </div>
        );
};
  
export default Body;


