import React, { useState, useEffect } from "react";
import { getAllPokemon } from "./../../services/FetchData";
import { useDebounce } from "use-debounce";
import {
  Container,
  ResultsContent,
  Input,
  Result,
  Pokemon,
  LinkStyled,
} from "./SearchBarStyled";

export default function SearchBar() {
  const [pokemonSearched, setPokemonSearched] = useState("");
  const [pokemonFound, setPokemonFound] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [debouncedSearchTerm] = useDebounce(pokemonSearched, 1000);

  const searchPokemonUrl =
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118";

  useEffect(() => {
    const searchPokemon = async () => {
      if (debouncedSearchTerm) {
        setIsSearching(true);
        let response = await getAllPokemon(searchPokemonUrl);
        setIsSearching(false);
        const newResult = response.results.filter((pokemon) => {
          if (pokemon.name.includes(pokemonSearched.toLowerCase())) {
            return pokemon;
          }
          return false;
        });
        setPokemonFound(newResult);
      } else {
        setPokemonFound([]);
      }
    };

    searchPokemon();
  }, [debouncedSearchTerm, pokemonSearched]);

  return (
    <Container>
      <Input
        onChange={(e) => setPokemonSearched(e.target.value)}
        placeholder="search your pokemon"
      />
      <ResultsContent pokemonSearched={pokemonSearched}>
        {isSearching ? (
          <div>
            <p>searching...</p>
          </div>
        ) : (
          pokemonFound.map((pokemon) => (
            <Result key={pokemon.name}>
              <LinkStyled to={`/pokemon/profil/${pokemon.name}`}>
                <Pokemon
                  onClick={() => {
                    setPokemonSearched("");
                  }}
                >
                  {pokemon.name}
                </Pokemon>
              </LinkStyled>
            </Result>
          ))
        )}
      </ResultsContent>
    </Container>
  );
}
