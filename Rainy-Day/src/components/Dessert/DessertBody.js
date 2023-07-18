import React from "react";
import Cards from "../Cards";
import MyContext from "../MyContext";
function DessertBody()
{
const {apiData} = React.useContext(MyContext);


const allDessert = apiData.map((dessert) => <Cards community={dessert} key={dessert.postLink} />);
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
  
export default DessertBody;


