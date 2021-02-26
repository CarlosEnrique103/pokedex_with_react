import React from 'react'

const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

function Pokecard({id, name, type, exp}) {
  const imgSrc= `${POKE_API}${id}.png`;
  return (
    <div className="Pokecard">
      <h1>{name}</h1>
      <img src={imgSrc}></img>
      <div>Type: {type}</div>
      <div>Experience: {exp}</div>
    </div>
  )
}

export default Pokecard
