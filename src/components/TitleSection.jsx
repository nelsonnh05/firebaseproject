import React from 'react';
import styled from 'styled-components';

const TitleSection = () => {
  return (
    <Title>
      <MainTitle>BLEU & OR: </MainTitle>
      <SubTitle>L'HERITAGE OLYMPIQUE</SubTitle>
    </Title>
  );
};

// Css styled components 
const Title = styled.div`
  text-align: left;
  position: absolute;
  top: 20vh; // Positionnez selon votre maquette
  left: 5vw; // Positionnez selon votre maquette
  color: white;
`;

const MainTitle = styled.h1`
  font-size: 3em; // Adaptez cette valeur à votre maquette
  margin: 0;
  font-family: playfair-display;
`;

const SubTitle = styled.h2`
  font-size: 2em; // Adaptez cette valeur à votre maquette
  margin: 0;  
  font-family: playfair-display;

`;

export default TitleSection;
