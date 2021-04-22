import React, { useState, useEffect } from "react";
import { getAllPokemon, getPokemon } from "../../services/FetchData";
import NavBar from "../navigation_bar/NavBar";
import SearchBar from "../search_bar/SearchBar";
import PokemonCard from "../pokemon_card/PokemonCard";
import {
  LoaderContainer,
  Loading,
  DisplayCard,
  PrevAndNext,
  Prev,
  Next,
} from "./homePageStyled";

export default function HomePage() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const initialUrl = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20";

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadingPokemon(response.results);

      setLoading(false);
    }
    fetchData();
  }, []);

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  const previousPage = async () => {
    if (prevUrl === null) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const nextPage = async () => {
    if (nextUrl === null) return;
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const pagination = () => {
    return (
      <PrevAndNext>
        <Prev prevUrl={prevUrl} onClick={previousPage}>
          Previous page
        </Prev>
        <Next nextUrl={nextUrl} onClick={nextPage}>
          Next page
        </Next>
      </PrevAndNext>
    );
  };
  return (
    <div>
      <NavBar />
      <SearchBar />
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
