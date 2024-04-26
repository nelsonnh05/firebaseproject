import React from 'react';
import styled from 'styled-components';

const HistoryNav = () => {
  return (
    <Nav>
      <NavItem>Premier Match</NavItem>
      <NavItem>Médaille d'Or</NavItem>
      <NavItem>Plus Large Victoire</NavItem>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  padding: 1em;
  background-color: white; // ou tout autre style que vous souhaitez appliquer
`;

const NavItem = styled.div`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default HistoryNav;
