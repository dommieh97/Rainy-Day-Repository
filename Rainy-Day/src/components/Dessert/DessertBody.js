import React from "react";
import Cards from "../Cards";

function DessertBody({dessert})
{


const allDessert = dessert.map((dessert) => <Cards community={dessert} key={dessert.postLink} />);
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


