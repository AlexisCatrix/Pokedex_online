import React, { useState, useEffect } from "react";
import { getAllPokemon, getPokemon } from "./services/FetchData";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import PokemonProfil from "./components/PokemonProfil";
import { PrevAndNext, Prev, Next } from "./AppStyled";

export default function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonSearched, setPokemonSearched] = useState([]);
  const [pokemonFound, setPokemonFound] = useState([]);
  const [input, setInput] = useState("");
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const initialUrl = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20";
  const searchPokemonUrl =
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118";

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

  const searchPokemon = async (input) => {
    let response = await getAllPokemon(searchPokemonUrl);
    setPokemonSearched(response.results);

    let newResult = pokemonSearched.filter((pokemon) => {
      if (pokemon.name.includes(input)) {
        return pokemon;
      }
      return false;
    });
    setInput(input);
    setPokemonFound(newResult);
  };

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
      <Switch>
        <Route exact path="/">
          <HomePage
            pagination={pagination}
            searchPokemon={searchPokemon}
            input={input}
            setInput={setInput}
            pokemonFound={pokemonFound}
            loading={loading}
            pokemonData={pokemonData}
            setPokemonFound={setPokemonFound}
          />
        </Route>
        <Route path="/pokemon/profil/:pokemon">
          <PokemonProfil
            pokemonFound={pokemonFound}
            setPokemonFound={setPokemonFound}
            searchPokemon={searchPokemon}
            input={input}
            setInput={setInput}
          />
        </Route>
      </Switch>
    </div>
  );
}
