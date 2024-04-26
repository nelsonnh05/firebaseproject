import React from 'react';
import styled from 'styled-components';

const BackgroundContainer = styled.div`
  position: fixed; 
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1; // S'assurer qu'il est derrière tous les autres contenus
  background: url('../public/fondfume.png') no-repeat center center;
  background-size: cover;
`;

const Background = ({ children }) => {
  return <BackgroundContainer>{children}</BackgroundContainer>;
};

export default Background;
