import {
  Container,
  Input,
  ResultsContent,
  Result,
  Pokemon,
  LinkStyled,
} from "./SearchBarStyled";

export default function SearchBar({
  searchPokemon,
  input,
  setInput,
  pokemonFound,
}) {
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
