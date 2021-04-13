import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

export default function PokemonProfil({
  pokemonFound,
  searchPokemon,
  input,
  setInput,
}) {
  return (
    <div>
      <NavBar />
      <SearchBar
        searchPokemon={searchPokemon}
        input={input}
        setInput={setInput}
        pokemonFound={pokemonFound}
      />
    </div>
  );
}
