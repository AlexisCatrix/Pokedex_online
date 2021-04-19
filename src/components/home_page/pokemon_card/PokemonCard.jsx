import { Card, CardsContainer, Name, Picture } from "./CardStyled";
import { LinkStyled } from "../navigation_bar/NavBarStyled";

export default function PokemonCard({ pokemonProfil }) {
  return (
    <CardsContainer value="cards_container">
      <LinkStyled to={`/pokemon/profil/${pokemonProfil.name}`}>
        <Name>{pokemonProfil.name}</Name>
        <Card value="card">
          <Picture
            src={pokemonProfil.sprites.other.dream_world.front_default}
          />
        </Card>
      </LinkStyled>
    </CardsContainer>
  );
}
