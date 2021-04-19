import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 375px) and (max-width: 600px) {
    align-items: center;
    height: 100vh;
    /* width: 100%; */
  }
`;

export const Card = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  border: solid 16px #f11919;
  border-radius: 10px;
  height: 60vh;
  margin: 2vw;

  animation-duration: 0.2s;
  animation-name: notHover;
  background: linear-gradient(black, white);

  @media screen and (min-width: 375px) and (max-width: 600px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 92vw;
    height: auto;
  }
`;

export const Name = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
  font-family: "Permanent Marker", cursive;
  font-weight: bold;
  font-size: 2.5em;
  -webkit-text-stroke: 1.5px #3b5ca8;
  width: min-content;
  height: min-content;
  margin: 1vw 2vw;
  color: #ffcb05;
  text-shadow: 2px 4px 2px black;
`;

export const Picture = styled.img`
  max-width: 20vw;
  height: auto;
  padding: 2vw;
  margin: 2vw;
  filter: drop-shadow(16px 14px 0px black);

  @media screen and (min-width: 375px) and (max-width: 600px) {
    max-width: 60vw;
  }
`;

export const Skills = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
  font-family: "Press Start 2P", cursive;
  margin-right: 0vw;
  border: 16px ridge #f11919;
  width: 75vw;
  background: #20d62b;  
  @media screen and (min-width: 375px) and (max-width: 600px) {
    width: 78vw;  
    height: 100vh;
    padding: 4vw;
  }
`;

export const AbilitySection = styled.h2`
  font-weight: bold;
  color: white;
  text-shadow: 2px 4px 0px black;
  margin: 2vw;
`;

export const Li = styled.li`
  font-family: none;
  list-style: square;
  margin: 1vw 2vw;
  @media screen and (min-width: 375px) and (max-width: 600px) {
    padding: 1vw;
  }
`;
