import styled, { css } from "styled-components";

export const ImageBackground = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  font-size: 3rem;

  h1 {
    margin-bottom: 0;
  }
`;

export const RevealText = styled.p`
  font-size: 2rem;
  text-align: justify;
  position: relative;
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #36454f;
    transform-origin: left;
    transform: rotateY(90deg);
    transition: transform 1s;
  }
  ${({ hide }) => hide && css`
      &:after {
        transform: rotateY(0deg);
      }
  `};
`;
