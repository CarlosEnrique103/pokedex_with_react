import React, { Component } from "react";
import Pokedex from "../Pokedex";

class Pokegame extends Component {
  static defaultProps = {
    pokemons: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
    ],
  };
  
  render() {
    let hand1 = [];
    let hand2 = [...this.props.pokemons];
    while(hand1.length < hand2.length) {
      let randomIndex = Math.floor(Math.random() * hand2.length);
      let value = hand2[randomIndex];
      hand1.push(value);
      hand2 = [...hand2.slice(0, randomIndex), ...hand2.slice(randomIndex + 1)];
    }
    let expHand1 = hand1.reduce((acc, curr) => acc + curr.base_experience, 0);
    let expHand2 = hand2.reduce((acc, curr) => acc + curr.base_experience, 0);
    return (
      <div>
        <h1>Pokegame !</h1>
        <Pokedex pokemons={hand1} exp={expHand1} isWinner={expHand1 > expHand2}/>
        <Pokedex pokemons={hand2} exp={expHand2} isWinner={expHand2 > expHand1}/>
      </div>
    );
  }
}

export default Pokegame;
