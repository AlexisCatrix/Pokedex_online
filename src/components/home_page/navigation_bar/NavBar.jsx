import { Title, LinkStyled, BoxTitle, NavContainer } from "./NavBarStyled";

export default function NavBar() {
  return (
    <div>
      <NavContainer>
        <BoxTitle>
          <LinkStyled to="/">
            <Title>Pokedex_Online</Title>
          </LinkStyled>
        </BoxTitle>
      </NavContainer>
    </div>
  );
}
