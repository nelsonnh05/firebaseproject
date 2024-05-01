import React from 'react';
import { Link } from 'react-router-dom'; 
import '../css/Victoire.css';
import menuIcon from '../photos/MENUNOIR.png'; 
import logo from '../photos/LOGOJONOIR.png';
import reg from '../photos/Rectangle 24 (2).png';
import reg1 from '../photos/Rectangle 25 (2).png';
import reg2 from '../photos/Rectangle 27 (2).png';
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




const Victoire = () => {
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

                <p className='paragfv'>
                Lors des Jeux Olympiques de 1924 à Paris, l'équipe de France <br/>
                de football a connu un moment historique.
                </p>
                
                <p className='paragfffv'>
                En huitièmes de finale, elle a affronté la Lettonie dans un <br/>
                 match marquant. Les joueurs français ont brillé sur le terrain, <br/>
                  démontrant leur talent et leur détermination. Avec une <br/>
                   performance remarquable, ils ont remporté une victoire éclatante avec un score final de 7 à 0.
                </p>
                <p className='paraggv'>
                Cette impressionnante démonstration de force a inscrit leur <br/>
                nom dans les annales du sport français, symbolisant la <br/>
                puissance et la grandeur de l'équipe à cette époque.
                   Olympiques.
                </p>
            
                <div className="photo-container">
    <img src={reg} alt="n" className="photoo" />
    <img src={reg1} alt="n" className="photoo2" />
    <img src={reg2} alt="n" className="photoo3" />
</div>


            <img src={logo} alt="Logo" className="logo" />
          
            
            <div className="menu-container">
                
                <img src={menuIcon} alt="Menu" className="menu-icon" />
                
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
        </div>
    );
}

export default Victoire;