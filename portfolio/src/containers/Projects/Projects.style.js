import styled from 'styled-components';

export const ImageButton = styled.div`
  cursor: pointer;
  overflow: hidden;
  display: inline-block;
  
  & > img {
    transition: transform .3s;
  }

  &:hover {
    & > img {
      transform: scale(1.5);
    }
  }
`;

export const Index = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
  font-size: 2.5rem;
  h1 {
    margin: 0;
    font-weight: bold;
    color: yellow;
    opacity: 0.5;
  }
`;

export const Title = styled.h1`
  color: rgb(162, 222, 208);
  font-weight: bold;
  margin: 0;
  font-size: 3.5rem;
`;