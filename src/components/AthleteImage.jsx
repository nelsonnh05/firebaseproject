import React from 'react';
import styled from 'styled-components';


const StyledImage = styled.img`
  max-width: 100%; // L'image sera réactive et s'adaptera à la largeur du conteneur
  max-height: 80vh; // Hauteur maximale de l'image pour ne pas dépasser la hauteur de la fenêtre
  margin-left:40em;
  margin-top: 20vh;
`;

const AthleteImage = ({ src }) => {
  return (
      <StyledImage src={src} alt="Athlete" />
  );
};

export default AthleteImage;
