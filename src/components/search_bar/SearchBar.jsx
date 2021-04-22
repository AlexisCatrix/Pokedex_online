import React, { useState } from "react";
import { getAllPokemon } from "./../../services/FetchData";
import {
  Container,
  Input,
  ResultsContent,
  Result,
  Pokemon,
  LinkStyled,
} from "./SearchBarStyled";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const [pokemonSearched, setPokemonSearched] = useState([]);
  const [pokemonFound, setPokemonFound] = useState([]);

  const searchPokemonUrl =
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118";

  const searchPokemon = async (input) => {
    let response = await getAllPokemon(searchPokemonUrl);
    setPokemonSearched(response.results);

    const newResult = pokemonSearched.filter((pokemon) => {
      if (pokemon.name.includes(input)) {
        return pokemon;
      }
      return false;
    });
    setInput(input);
    setPokemonFound(newResult);
  };

  return (
    <Container>
      <Input
        onChange={(e) => searchPokemon(e.target.value)}
        placeholder="search your pokemon"
      />
      <ResultsContent input={input}>
        {input
          ? pokemonFound.map((pokemon) => (
              <Result key={pokemon.name}>
                <LinkStyled to={`/pokemon/profil/${pokemon.name}`}>
                  <Pokemon
                    onClick={() => {
                      setInput("");
                    }}
                  >
                    {pokemon.name}
                  </Pokemon>
                </LinkStyled>
              </Result>
            ))
          : ""}
      </ResultsContent>
    </Container>
  );
}
