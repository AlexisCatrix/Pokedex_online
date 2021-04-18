import { Card, CardsContainer, Name, Picture } from "./CardStyled";
import { LinkStyled } from "./NavBarStyled";

export default function PokemonCard({ pokemonProfil }) {
  return (
    <CardsContainer>
      <LinkStyled to={`/pokemon/profil/${pokemonProfil.name}`}>
        <Card>
          <Name>{pokemonProfil.name}</Name>
          <Picture src={pokemonProfil.sprites.front_default} />
        </Card>
      </LinkStyled>
    </CardsContainer>
  );
}
