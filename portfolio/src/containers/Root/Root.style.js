import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  left: 10vw;
  width: 80vw;
  top: 10vh;
  height: 80vh;
  background-image: url(${require('../../assets/body-background.jpg')});
  opacity: 0.5;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: -99;
`;