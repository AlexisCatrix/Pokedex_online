import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { getAllPokemon, getPokemon } from "./services/FetchData";
import HomePage from "./components/HomePage";
import PokemonCard from "./components/PokemonCard";
import {
  LoaderContainer,
  Loading,
  DisplayCard,
  PrevAndNext,
  Prev,
  Next,
} from "./AppStyled";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const initialUrl = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20";

  async function fetchData() {
    let response = await getAllPokemon(initialUrl);
    setNextUrl(response.next);
    setPrevUrl(response.previous);
    await loadingPokemon(response.results);

    setLoading(false);
  }

  useEffect(() => {
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
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      {pagination()}
      <div>
        {loading ? (
          <LoaderContainer>
            <Loading src="https://media.giphy.com/media/3oz8xCQIuyFVM6XH4k/giphy.gif" />
          </LoaderContainer>
        ) : (
          <DisplayCard>
            {pokemonData.map((pokemonProfil, i) => {
              return <PokemonCard key={i} pokemonProfil={pokemonProfil} />;
            })}
          </DisplayCard>
        )}
      </div>
      {pagination()}
    </div>
  );
}

export default App;
