import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  width: min-content;
`;

export const Card = styled.div`
  /*----------------------KEYFRAMES----------------------*/
  @keyframes hover {
    0% {
      background: black;
    }
    100% {
      background: white;
    }
  }
  @keyframes notHover {
    0% {
      background: linear-gradient(rgba(0, 0, 0, 0), white);
    }
    25% {
      background: linear-gradient(rgba(0, 0, 0, 0.25), white);
    }
    50% {
      background: linear-gradient(rgba(0, 0, 0, 0.5), white);
    }
    75% {
      background: linear-gradient(rgba(0, 0, 0, 0.75), white);
    }
    100% {
      background: linear-gradient(rgba(0, 0, 0, 1), white);
    }
  }
  /*----------------------KEYFRAMES----------------------*/

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  width: 15vw;
  height: 15vw;
  margin: 2vw;
  padding: 4vw;
  cursor: pointer;

  animation-duration: 0.2s;
  animation-name: notHover;
  background: linear-gradient(black, white);

  @media screen and (min-width: 1px) and (max-width: 600px) {
    width: 80vw;
    height: 80vw;
  }
  &:hover {
    animation-duration: 0.5s;
    animation-name: hover;
    background: white;
  }
`;

export const Name = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
  font-family: "Permanent Marker", cursive;
  font-weight: bold;
  font-size: 2em;
  -webkit-text-stroke: 1.5px #3b5ca8;
  display: flex;
  justify-content: center;
  padding: 0.5vw;
  color: #ffcb05;
  text-shadow: 2px 4px 2px black;
`;

export const Picture = styled.img`
  max-width: 12vw;
  padding: 2vw;
  transform: scale(1.6);

  overflow: hidden;
  filter: drop-shadow(16px 14px 0px black);
  :hover {
    filter: drop-shadow(16px 14px 0px black);
  }

  @media screen and (min-width: 1px) and (max-width: 600px) {
    max-width: 40vw;
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
