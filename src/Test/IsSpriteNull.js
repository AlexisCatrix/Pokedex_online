import { getAllPokemon, getPokemon } from "../services/FetchData";

export async function IsSpriteNull(searchPokemonUrl) {
  const response = await getAllPokemon(searchPokemonUrl);
  const allPokemon = response.results;

  const infoPoke = allPokemon.filter((pokemonObject) => {
    return pokemonObject.url;
  });
  const fetchInfoSprite = infoPoke.map(async (anyPoke) => {
    const any_poke = await getPokemon(anyPoke.url);

    const pathToArtwork = "official-artwork";

    if (any_poke.sprites.other[pathToArtwork].front_default === null) {
      console.log(any_poke.name);
    } else {
      console.log("This pokemon has a Artwork sprite");
    }
    return fetchInfoSprite;
  });
}
