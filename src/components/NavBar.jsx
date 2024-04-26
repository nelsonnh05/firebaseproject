import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBar = ({ leftLogo, rightLogo }) => {
  return (
    <Nav>
      <Logo src={leftLogo} alt="Left Logo" />
      <NavItems>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </NavItems>
      <MenuIcon src={rightLogo} alt="Menu Icon" />
    </Nav>
  );
};

// Css styled components
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  width: 100%;
  top: 0;
  z-index: 10;
  margin-left: 5vh;
`;

const Logo = styled.img`
  height: auto;
`;

const NavItems = styled.div`
  display: none; 
`;

const MenuIcon = styled.img`
  height: auto; 
`;

export default NavBar;
