import React from 'react';
import { Link } from 'react-router-dom'; 
import '../css/PremierM.css';
import menuIcon from '../photos/MENUNOIR.png'; 
import logo from '../photos/LOGOJONOIR.png';
import reg from '../photos/Rectangle 24 (1).png';
import reg1 from '../photos/Rectangle 25 (1).png';
import reg2 from '../photos/Rectangle 27 (1).png';
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




const PremierM = () => {
    return (
        <div className="histoirek">
            <p className='titreu'>L'HISTOIRE</p>
            <Link to="/premier">
                <p className='titreb'>PREMIER MATCH</p>
            </Link>
            <Link to="/histoire">
                <p className='titret'>MEDAILLE D'OR</p>
            </Link>
            <Link to="/victoire">
                <p className='titref'>PLUS LARGE VICTOIRE</p>
            </Link>

                <p className='paragfm'>
                Le premier match de l'équipe de France de football aux <br/>
                 Jeux Olympiques remonte à l'année 1900 à Paris, lors des Jeux <br/>
                 Olympiques d'été. 
                </p>
                
                <p className='paragfff'>
                Cette compétition marquait la première apparition du football <br/>
                 dans le programme olympique. L'équipe de France a affronté <br/>
                 l'équipe de Belgique dans un match historique qui s'est <br/>
                  déroulé le 22 octobre 1900.
                </p>
                <p className='paragg'>
                Le match s'est soldé par une victoire écrasante de la France <br/>
                 sur un score de 6 à 2. Ce premier match a jeté les bases d'une <br/>
                  longue et glorieuse histoire pour le football français aux Jeux <br/>
                   Olympiques.
                </p>
            
                <div className="photo-container">
    <img src={reg} alt="n" className="photoo" />
    <img src={reg1} alt="n" className="photoo2" />
    <img src={reg2} alt="n" className="photoo3" />
</div>


            <img src={logo} alt="Logo" className="logo" />
          
            
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

export default PremierM;