import { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import {
  Card,
  CardsContainer,
  Name,
  Picture,
  Skills,
  AbilitySection,
  Li,
} from "./CardStyled";

export default function PokemonProfil({
  pokemonFound,
  pokemonProperties,
  fetchPokemonData,
  searchPokemon,
  input,
  loadingProfil,
  setInput,
}) {
  let { pokemon } = useParams();

  useEffect(() => {
    fetchPokemonData(pokemon);
  });

  return (
    <div>
      <NavBar />
      <SearchBar
        searchPokemon={searchPokemon}
        input={input}
        setInput={setInput}
        pokemonFound={pokemonFound}
      />
      {!loadingProfil && (
        <CardsContainer>
          <Card>
            <Name>{pokemonProperties.name}</Name>
            <Picture
              src={pokemonProperties.sprites.front_default}
              alt={pokemonProperties.name}
            />
            <Skills>
              <AbilitySection>Ability </AbilitySection>
              <div>
                {pokemonProperties.abilities.map((ability, i) => {
                  return (
                    <div key={i}>
                      <ul>
                        <Li>{ability.ability.name}</Li>
                      </ul>
                    </div>
                  );
                })}
              </div>
            </Skills>
          </Card>
        </CardsContainer>
      )}
    </div>
  );
}
