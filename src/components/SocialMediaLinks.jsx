import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialMediaLinks = () => {
  return (
    <LinksContainer>
      <ShareText>Partager</ShareText>
      <SocialLink href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </SocialLink>      
      <SocialLink href="https://www.twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </SocialLink>
      <SocialLink href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </SocialLink>
    </LinksContainer>
  );
};

const LinksContainer = styled.div`
  position: absolute;
  bottom: 10vh; 
  right: 5vh; 
  display: flex;
  flex-direction: column; // pour aligner les icônes verticalement
`;

const ShareText = styled.span`
  color: white;
  margin-bottom: 16px; // Espace entre le texte et les icônes
  font-size: 18px; // Taille du texte
  text-transform: uppercase; // Met le texte en majuscules
  letter-spacing: 1px; // Espacement entre les lettres
  font-weight: bold; // Met le texte en gras
`;

const SocialLink = styled.a`
  color: white; // ou la couleur de votre choix
  margin-bottom: 10px; // donne un peu d'espace entre les icônes
  &:hover {
    color: #ddd; // ou la couleur au survol de votre choix
  }
`;

export default SocialMediaLinks;
