import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from React Router
import '../css/MainPage.css'; // Import CSS file for styling
import menuIcon from '../photos/MENUBLANC.png'; // Import your image
import logo from '../photos/LogoJOBLANC.png'; 
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

const MainPage = () => {
    return (
        <div className="main-page">
               <p className='titreun'>
                    BLEU & OR :
                </p>
                <p className='titred'>
                    L'HERITAGE OLYMPIQUE
                </p>
                <p className='brief'>
                    SOMMAIRE
                </p>
            <Link to="histoire" className="paragraph-link"> 
                <p className='histoire'>
                    1. Histoire
                </p>
            </Link>
            <Link to="legendes" className="paragraph-link"> 
                <p className='legendes'>
                    2. Les Legendes
                </p>
            </Link>
            <Link to="tenues" className="paragraph-link"> {/* Link to Component4 */}
                <p className='tenues'>
                    3. Les Tenues
                </p>
            </Link>
            <Link to="player" className="paragraph-link"> {/* Link to Component5 */}
                <p className='les18'>
                    4. Les 18
                </p>
            </Link>
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
        </div>
    );
}

export default MainPage;
