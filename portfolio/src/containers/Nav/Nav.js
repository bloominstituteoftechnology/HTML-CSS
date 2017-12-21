import React, { Component } from 'react';
import { NavContainer, NavItem } from './Nav.style';

class Nav extends Component {
  render() {
    return (
      <NavContainer>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/projects">Projects</NavItem>
        <NavItem to="/about">About Me</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </NavContainer>
    );
  }
}

export default Nav;