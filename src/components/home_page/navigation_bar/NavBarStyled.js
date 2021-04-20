import styled from "styled-components";
import { Link } from "react-router-dom";

export const BoxTitle = styled.div`
  display: flex;
  width: 100vw;
  background-color: #f11919;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const Title = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
  font-family: "Permanent Marker", cursive;
  color: #ffcb05;
  font-size: 2em;
  margin: 2vw;
  font-weight: bold;
  -webkit-text-stroke: 1.5px #3b5ca8;

  :hover {
    text-shadow: 2px 8px 0px black;
  }
`;
export const Items = styled.li`
  @import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
  font-family: "Permanent Marker", cursive;
  display: flex;
  align-items: space-around;
  color: white;
  :hover {
    text-shadow: 2px 8px 2px black;
  }
`;

export const BoxItems = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(160deg, #4f639a, grey 95%);
  width: 70vw;
`;

export const NavContainer = styled.div`
  display: flex;
  border: 2px solid;
  text-shadow: 2px 2px 2px black;
`;
