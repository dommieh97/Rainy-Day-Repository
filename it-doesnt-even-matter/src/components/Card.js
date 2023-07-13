import React from "react";


function Card({pokemon})
{
    console.log(pokemon)
    return (
            <div className="card">
                <h1>Pokemon name: {pokemon.name}</h1>
            </div>
        )
}

export default Card;