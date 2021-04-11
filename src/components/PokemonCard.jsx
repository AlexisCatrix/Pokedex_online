import {
  Card,
  CardsContainer,
  Name,
  Picture,
  Skills,
  AbilitySection,
  Li,
} from "./CardStyled";

export default function PokemonCard({ pokemonProfil }) {
  let pokeAbilities = pokemonProfil.abilities.map((ability) => {
    return ability.ability.name;
  });

  return (
    <CardsContainer>
      <Card>
        <Name>{pokemonProfil.name}</Name>
        <Picture src={pokemonProfil.sprites.front_default} />
        <Skills>
          <AbilitySection>Ability </AbilitySection>
          <div>
            {pokeAbilities.map((ability, i) => {
              return (
                <div key={i}>
                  <ul>
                    <Li>{ability}</Li>
                  </ul>
                </div>
              );
            })}
          </div>
        </Skills>
      </Card>
    </CardsContainer>
  );
}
