import styled from 'styled-components';
import { Flex } from '../../theme/Grid';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled(Flex)`
  position: fixed;
  right: 8rem;
  top: 2rem;
`;

export const NavItem = styled(NavLink)`
  margin-right: 30px;
  font-size: 1.75rem;
  cursor: pointer;
  color: blue;
  position: relative;
  text-decoration: none;

  &:hover {
    color: yellow;
    &:after {
      content: ' ';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: lightgreen;
      z-index: -1;
      transform: scale(1.3, 1.5);
    }
  }
`;