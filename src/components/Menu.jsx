import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Menu = () => {
  return (
    <Sidebar>
      <h3 style={{fontFamily:'playfair-display'}}>SOMMAIRE</h3>
      <ul>
        <li><StyledLink to="/histoire">HISTOIRE</StyledLink></li>
        <li><StyledLink to="/legendes">LES LEGENDES</StyledLink></li>
        <li><StyledLink to="/tenues">TENUES</StyledLink></li>
        <li><StyledLink to="/player">LES 18</StyledLink></li>
      </ul>
    </Sidebar>
  );
};

// Css styled components

const Sidebar = styled.aside`
  position: absolute;
  left: 20%;
  bottom: 5%;
  transform: translateY(-50%);
  color: white;
`;

const StyledLink = styled(Link)`
  font-family: playfair-display;
  color: white;
  display: block;
  padding: 1em;
`;

export default Menu;
