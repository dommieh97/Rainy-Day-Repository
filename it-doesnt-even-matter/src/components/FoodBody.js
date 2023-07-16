import React from "react";
import Cards from "./Cards";
import MyContext from "./MyContext";
function Body()
{
const {food} = React.useContext(MyContext);


const allFood = food.map((food) => <Cards food={food} key={food.postLink} />);
return(
    <div className="scrollbar" id="style-2">
        <div className="force-overflow">
            <div id="photos" style={{height:'33%', width:'100%'}}>
                {allFood}
            </div>  
        </div>
    </div>
        );
};
  
export default Body;


