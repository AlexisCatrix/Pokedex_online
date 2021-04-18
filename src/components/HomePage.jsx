import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import PokemonCard from "./PokemonCard";
import { LoaderContainer, Loading, DisplayCard } from "../AppStyled";

export default function HomePage({
  pagination,
  searchPokemon,
  input,
  setInput,
  pokemonFound,
  loading,
  pokemonData,
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
      {pagination()}
      <div>
        {loading ? (
          <LoaderContainer>
            <Loading src="https://media.giphy.com/media/3oz8xCQIuyFVM6XH4k/giphy.gif" />
          </LoaderContainer>
        ) : (
          <DisplayCard>
            {pokemonData.map((pokemonProfil) => {
              return (
                <PokemonCard
                  key={pokemonProfil.name}
                  pokemonProfil={pokemonProfil}
                />
              );
            })}
          </DisplayCard>
        )}
      </div>
      {pagination()}
    </div>
  );
}
