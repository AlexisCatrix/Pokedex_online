import { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../home_page/navigation_bar/NavBar";
import SearchBar from "../home_page/search_bar/SearchBar";
import {
  Card,
  CardContainer,
  Name,
  PictureContainer,
  Picture,
  Skills,
  AbilitySection,
  Li,
} from "./pokemonProfilStyled";

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
        <CardContainer value="card_container">
          <Name>{pokemonProperties.name}</Name>
          <Card value="card">
            <PictureContainer value="picture_container">
              <Picture
                src={pokemonProperties.sprites.other.dream_world.front_default}
                alt={pokemonProperties.name}
              />
            </PictureContainer>
            <Skills value="skills">
              <AbilitySection value="abilities_section">
                Ability{" "}
              </AbilitySection>
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
        </CardContainer>
      )}
    </div>
  );
}
