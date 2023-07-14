import React from "react";
import Card from './Card.js'

function Body()
{

    // const allPokemons = pokemon.map(pokemon => <Card key={pokemon.url} pokemon={pokemon}/>)

    return(
        <div className="Body">
        <Card/>
        </div>
    );
};
  
export default Body;