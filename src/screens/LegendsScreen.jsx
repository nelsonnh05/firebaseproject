import React from 'react';
import NavBar from '../components/NavBar';
import Background from '../components/Background';
import AthleteImage from '../components/AthleteImage';
import SocialMediaLinks from '../components/SocialMediaLinks';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const arrowIcon = '/arrow.svg'; 
const soccerBallIcon = '/soccer-ball.svg';

const LegendsScreen = () => {
    return (
        <>
          <NavBar leftLogo="/leftLogo.png" rightLogo="/rightLogo.png" />
          <Background />
          <LegendsContent>
          <HeaderSection>
            <Title>
                <IconLink to="/">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </IconLink>
                <SubTitle>LES</SubTitle>
                <MainTitle>LÉGENDES</MainTitle>
            </Title>
            <SoccerBallIconWrapper>
                <img src={soccerBallIcon} alt="Soccer Ball" />
            </SoccerBallIconWrapper>
            <ArrowDownWrapper>
                <img src={arrowIcon} alt="Arrow Down" />
            </ArrowDownWrapper>
          </HeaderSection>
          <Description>
            Découvrez les légendes de l'équipe de France de football aux Jeux Olympiques,
            des athlètes qui ont marqué l'histoire par leur talent, leur passion et leur
            détermination. Leur héritage inspire encore aujourd'hui, symbolisant
            l'excellence et la fierté nationale sur la scène internationale.
          </Description>
          <AthleteImage src="/athlete-image.png" />
          </LegendsContent>
          <SocialMediaLinks />
    </>
  );
};

const LegendsContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderSection = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin-top: 10vh;
`;

const iconStyles = css`
  width: 50px;
  height: auto;
  margin: 0.5em;
`;
const IconLink = styled(Link)`
  color: white;
  margin: 0 20px; 
`;
const SoccerBallIconWrapper = styled.div`
  ${iconStyles}
  margin: 20vh
`;

const ArrowDownWrapper = styled.div`
  ${iconStyles}
`;

const Title = styled.div`
  text-align: center;
  color: white;
`;

const MainTitle = styled.h1`
  font-size: 5em;
  margin: 0;
  font-family: 'playfair-display', serif;
`;

const SubTitle = styled.h2`
  font-size: 1em;
  margin: 0;
  font-family: 'playfair-display', serif;
`;

const Description = styled.p`
  color: white;
  font-size: 1.2em;
  max-width: 600px;
  text-align: justify; 
  margin: 30vh; 
  margin-right: 80vh;
  font-family: playfair-display;
  position: relative;
`;

export default LegendsScreen;
