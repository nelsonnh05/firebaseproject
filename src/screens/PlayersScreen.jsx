import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { Link } from 'react-router-dom'; // Import Link component from React Router
import PlayerCard from '../components/PlayerCard';
import logo from '../photos/LogoJOBLANC.png';
import menuIcon from '../photos/MENUBLANC.png';
import styled from 'styled-components';

const MenuLink = styled(Link)`
  background-color: #6b6868;
  color: white; // Couleur de base pour les liens
  text-decoration: none;
  padding: 10px;
  display: block; // Assure que le lien prend toute la largeur pour le padding

  &:hover {
    color: #acac4f; // Couleur au survol
  }
`;


const UserScreen = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "players"), (snapshot) => {
      const playersData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPlayers(playersData);
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  return (
    <Container>
      <img src={logo} alt="Logo" className="logo" />
      <div className="menu-container">
        <img src={menuIcon} alt="Menu" className="menu-icon" />
        <div className="menu">
          <MenuLink to="/">Accueil</MenuLink>
          <MenuLink to="/histoire">Histoire</MenuLink>
          <MenuLink to="/legendes">Les Légendes</MenuLink>
          <MenuLink to="/tenues">Tenues</MenuLink>
          <MenuLink to="/player">Les 18</MenuLink>
        </div>
      </div>
      <Header>LES 18</Header>
      <Description>Dans la quête de l'or olympique, les équipes nationales de football convoquent leurs héros en devenir.
      <br/>Guidés par la flamme de la jeunesse et de la passion, ces joueurs, <br/>tous âgés de moins de 23 ans, sont sélectionnés pour leur bravoure, 
         leur loyauté et leur détermination. <br/>Chaque joueur choisi incarne l'esprit de son peuple, 
         prêt à se battre avec férocité pour la gloire de son pays.</Description>
      <SectionTitle>Gardiens</SectionTitle>
      <PlayerGrid>
        {players.filter(player => player.position === 'Gardien').map(player => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </PlayerGrid>
      
      <SectionTitle>Défenseurs</SectionTitle>      
      <PlayerGrid>
        {players.filter(player => player.position === 'Défenseur').map(player => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </PlayerGrid>
      <SectionTitle>Milieux</SectionTitle>      
      <PlayerGrid>
        {players.filter(player => player.position === 'Milieu').map(player => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </PlayerGrid>
      <SectionTitle>Attaquants</SectionTitle>      
      <PlayerGrid>
        {players.filter(player => player.position === 'Attaquant').map(player => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </PlayerGrid>
    </Container>
  );
};

const Container = styled.div`
  background-color: black;
  color: white;
  padding: 20px;
  text-align: center;
  font-family: playfair-display;

`;

const Header = styled.h1`
  font-family: playfair-display;
`;

const Description = styled.p`
  font-family: playfair-display;
`;

const SectionTitle = styled.h2`
  font-family: playfair-display;
  align-content: left;
`;

const PlayerGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`;



export default UserScreen;
