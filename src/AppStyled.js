import styled from "styled-components";

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Loading = styled.img`
  width: 40vw;
  @media screen and (min-width: 375px) and (max-width: 600px) {
    width: 100vw;
  }
`;

export const DisplayCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const PrevAndNext = styled.div`
  display: flex;
  margin: 2vw;
`;

export const Prev = styled.button`
  margin: 1vw;
  display: ${({ prevUrl }) => (prevUrl === null ? "none" : "")};
`;

export const Next = styled.button`
  margin: 1vw;
  display: ${({ nextUrl }) => (nextUrl === null ? "none" : "")};
`;
