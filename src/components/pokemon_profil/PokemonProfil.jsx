import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllPokemon, getPokemon } from "./../../services/FetchData";
import NavBar from "..//navigation_bar/NavBar";
import SearchBar from "../search_bar/SearchBar";
import { LoaderContainer, Loading } from "./../home_page/homePageStyled";
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

export default function PokemonProfil() {
  const [pokemonProperties, setPokemonProperties] = useState({});
  const [loadingProfil, setLoadingProfil] = useState(true);

  const searchPokemonUrl =
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118";
  const pathSpriteDreamWorld = `dream_world`;
  const pathSpriteArtwork = `official-artwork`;

  let { pokemon } = useParams();

  useEffect(() => {
    const fetchPokemonData = async (pokemonName) => {
      setLoadingProfil(true);
      setPokemonProperties({});

      const response = await getAllPokemon(searchPokemonUrl);
      const allPokemon = response.results;

      const infoPoke = allPokemon.filter((pokemonObject) => {
        return pokemonObject.name === pokemonName;
      });
      const fullInfoPoke = await getPokemon(infoPoke[0].url);
      setPokemonProperties(fullInfoPoke);

      setLoadingProfil(false);
    };
    fetchPokemonData(pokemon);
  }, [pokemon]);

  return (
    <div>
      <NavBar />
      <SearchBar />
      {!loadingProfil ? (
        <CardContainer value="card_container">
          <Name>{pokemonProperties.name}</Name>
          <Card value="card">
            <PictureContainer value="picture_container">
              <Picture
                src={
                  pokemonProperties.sprites.other[pathSpriteArtwork]
                    .front_default !== null
                    ? pokemonProperties.sprites.other[pathSpriteArtwork]
                        .front_default
                    : pokemonProperties.sprites.other[pathSpriteDreamWorld]
                        .front_default !== null
                    ? pokemonProperties.sprites.other[pathSpriteDreamWorld]
                        .front_default
                    : pokemonProperties.sprites.front_default
                }
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
      ) : (
        <LoaderContainer>
          <Loading src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" />
        </LoaderContainer>
      )}
    </div>
  );
}
