import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  width: min-content;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: min-content;
  height: auto;
  border: solid 2px red;
  margin: 2vw;
  padding: 2vw;
  @media screen and (min-width: 375px) and (max-width: 600px) {
    width: 80vw;
  }
`;

export const Name = styled.h1`
  font-weight: bold;
  font-size: 1.5em;
`;

export const Picture = styled.img`
  width: 10vw;
  @media screen and (min-width: 375px) and (max-width: 600px) {
    width: 60vw;
  }
`;

export const Skills = styled.div`
  margin: 2vw;
`;

export const AbilitySection = styled.h2`
  font-weight: bold;
  margin: 2vw;
`;

export const Li = styled.li`
  list-style: square;
`;
