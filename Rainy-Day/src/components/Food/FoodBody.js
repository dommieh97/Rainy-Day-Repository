import React from "react";
import Cards from "../Cards";
import MyContext from "../MyContext";
function FoodBody()
{
const {apiData} = React.useContext(MyContext);


const allFood = apiData.map((food) => <Cards community={food} key={food.postLink} />);
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
  
export default FoodBody;


