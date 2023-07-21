import React, { useEffect } from "react";
import Cards from "../Cards";
import MyContext from "../MyContext";
import { useLocation } from "react-router-dom";

function Pokemon()
{
const [pokemon, setPokemon] = React.useState([])
const location = useLocation();
const { setFirstEndPoint } = React.useContext(MyContext);

useEffect(() => 
{
    fetch("https://meme-api.com/gimme/Pokemonart/50")
    .then(r => r.json())
    .then(data => setPokemon(data.memes))
}, []); 

useEffect(() => {
    setFirstEndPoint(location.pathname);
    });

const allVG = pokemon.map((pokemon) => <Cards community={pokemon} key={pokemon.postLink} />);
return(
    <div className="scrollbar" id="style-2">
        <div className="force-overflow">
            <div id="photos" style={{height:'33%', width:'100%'}}>
                {allVG}
            </div>  
        </div>
    </div>
        );
};
  
export default Pokemon;


