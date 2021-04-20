import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  height: min-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Input = styled.input`
  margin: 1vw 2vw;
  padding: 0.5vw;
  border: solid 1px grey;
  height: auto;
  width: 15vw;
  @media screen and (min-width: 1px) and (max-width: 600px) {
    width: 60vw;
    height: 30px;
    padding: 1vw;
  }
`;

export const ResultsContent = styled.div`
  border: solid 1px black;
  box-shadow: 2px 2px 8px black;
  position: relative;
  margin: 0.5vw 2vw;
  width: auto;
  height: 30vh;
  cursor: pointer;
  overflow: auto;
  display: ${({ input }) => (input ? "" : "none")};
  @media screen and (min-width: 1px) and (max-width: 600px) {
    height: 100vw;
  }
`;

export const Result = styled.div`
  background: white;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
`;

export const Pokemon = styled.p`
  color: black;
  padding: 0.5vw;
  :hover {
    background: #f11919;
    color: white;
  }
  @media screen and (min-width: 1px) and (max-width: 600px) {
    padding: 2vw;
  }
`;
