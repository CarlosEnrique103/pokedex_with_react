import React, {Component} from "react";
import Pokecard from "../Pokecard";
import uniqid from "uniqid";
import "./style.css";

class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWinner){
      title = <h1 className="Pokedex-winner">Winner!</h1>
    } else {
      title = <h1 className="Pokedex-loser">Loser!</h1>
    }
    return(
      <div className="Pokedex">
        {title}
        <p>Total experience: {this.props.exp} xp</p>
        <div className="Pokedex-cards">
          {
            this.props.pokemons.map((pokemon) => (
              <Pokecard 
                key={uniqid()}
                id={pokemon.id}
                name={pokemon.name}
                type={pokemon.type}
                exp={pokemon.base_experience}
              />
            ))
          }
        </div>
      </div>
    )
  };
}

export default Pokedex
