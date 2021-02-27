import React from "react";
import "./style.css";

//const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const POKE_API_BETTER =
  "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

function addZeros(num) {
  // const newNum = num <= 999 ? `${"0".repeat(3 - String(num).length)}${num}` : num;
  return num <= 999 ? `${("00" + num).slice(-3)}`: num;
}

function Pokecard({ id, name, type, exp }) {
  const idx = addZeros(id);
  const imgSrc = `${POKE_API_BETTER}${idx}.png`;
  return (
    <div className="Pokecard">
      <h1 className="Pokecar-title">{name}</h1>
      <div className="Pokecard-image">
        <img src={imgSrc} alt={name}></img>
      </div>
      <div className="Pokecard-data">Type: {type}</div>
      <div className="Pokecard-data">Experience: {exp} xp</div>
    </div>
  );
}

export default Pokecard;
