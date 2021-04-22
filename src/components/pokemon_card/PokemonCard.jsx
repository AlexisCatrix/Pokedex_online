import { Card, CardsContainer, Name, Picture } from "./CardStyled";
import { LinkStyled } from "../navigation_bar/NavBarStyled";

export default function PokemonCard({ pokemonProfil }) {
  const pathSpriteDreamWorld = `dream_world`;
  const pathSpriteArtwork = `official-artwork`;
  return (
    <CardsContainer value="cards_container">
      <LinkStyled to={`/pokemon/profil/${pokemonProfil.name}`}>
        <Name>{pokemonProfil.name}</Name>
        <Card value="card">
          <Picture
            src={
              pokemonProfil.sprites.other[pathSpriteDreamWorld]
                .front_default !== null
                ? pokemonProfil.sprites.other[pathSpriteDreamWorld]
                    .front_default
                : pokemonProfil.sprites.other[pathSpriteArtwork]
                    .front_default !== null
                ? pokemonProfil.sprites.other[pathSpriteArtwork].front_default
                : pokemonProfil.sprites.front_default
            }
            alt={pokemonProfil.name}
          />
        </Card>
      </LinkStyled>
    </CardsContainer>
  );
}
