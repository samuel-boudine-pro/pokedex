// import PropTypes from "prop-types";
import React from 'react';
// NavBar.propTypes = {
//   pokemonIndex: PropTypes.number.isRequired,
//   setPokemonIndex: PropTypes.func.isRequired,
//   pokemonListLength: PropTypes.number.isRequired,
// };

// eslint-disable-next-line react/prop-types
function NavBar({ setPokemonIndex, pokemonList }) {
  const handleClick = (pokemonIndex) => {
    setPokemonIndex(pokemonIndex);
    if (pokemonList[pokemonIndex].name === 'pikachu') {
        alert("pika pikachu !!!")
    }
  };
  console.log(pokemonList);
  return (
    <ul>
      {pokemonList.map((pokemon, pokemonIndex) => (
        <li key={pokemon.name}>
          <button onClick={() => handleClick(pokemonIndex)}>
            {pokemon.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default NavBar;
