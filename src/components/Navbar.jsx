import PropTypes from "prop-types";

NavBar.propTypes = {
  pokemonIndex: PropTypes.number.isRequired,
  setPokemonIndex: PropTypes.func.isRequired,
  pokemonListLength: PropTypes.number.isRequired,
};

function NavBar({ pokemonIndex, setPokemonIndex, pokemonListLength }) {
  const handleClickDecrementIndex = () => {
    setPokemonIndex(pokemonIndex - 1);
  };
  const handleClickIncrementIndex = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  return (
    <div>
      {pokemonIndex > 0 ? (
        <button onClick={handleClickDecrementIndex}>Précedent</button>
      ) : (
        ""
      )}
      {pokemonIndex < pokemonListLength - 1 ? (
        <button onClick={handleClickIncrementIndex}>Suivant</button>
      ) : (
        ""
      )}
    </div>
  );
}

export default NavBar;
