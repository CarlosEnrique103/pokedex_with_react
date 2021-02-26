import React from "react";
import "./style.css";

//const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const POKE_API_BETTER =
  "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

function addZeros(num) {
  const newNum = `${"0".repeat(3 - String(num).length)}${num}`;
  return newNum;
  // switch (String(num).length) {
  //   case 1:
  //     return `00${num}`
  //   case 2:
  //     return `0${num}`
  //   default:
  //     return String(num);
  // }
}

function Pokecard({ id, name, type, exp }) {
  const idx = addZeros(id);
  const imgSrc = `${POKE_API_BETTER}${idx}.png`;
  return (
    <div className="Pokecard">
      <h1>{name}</h1>
      <img src={imgSrc} alt={name}></img>
      <div>Type: {type}</div>
      <div>Experience: {exp}</div>
    </div>
  );
}

export default Pokecard;
