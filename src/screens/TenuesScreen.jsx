import React, { Component } from "react";
import { Link } from 'react-router-dom'; // Import Link component from React Router
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
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


export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle,
    autoplay: true,
    interval: 5000 // Intervalle entre les transitions automatiques (en millisecondes)
  };

  componentDidMount() {
    if (this.state.autoplay) {
      this.startAutoplay();
    }
  }

  componentWillUnmount() {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
    }
  }

  startAutoplay = () => {
    this.autoplayTimer = setInterval(() => {
      this.setState(prevState => ({
        goToSlide: (prevState.goToSlide + 1) % this.slides.length // Cela crée une boucle dans le carousel
      }));
    }, this.state.interval);
  };

  slides = [
    { img: '1900.png', year: 1900 },
    { img: '1920.png', year: 1920 },
    { img: '1976.png', year: 1976 },
    { img: '1984.png', year: 1984 },
    { img: '2020.png', year: 2020 }
  ].map((item, index) => ({
    key: uuidv4(),
    content: <img src={`/${item.img}`} alt={`${item.year} image`} />,
    onClick: () => this.setState({ goToSlide: index })
  }));

  render() {
    return (
      <div>
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
          <div>
            <h2 style={{ color: "white", textAlign: "center", fontFamily: "fair-display" }}>LES</h2>
            <h1 style={{ color: "white", textAlign: "center", fontFamily: "fair-display" }}>TENUES</h1>
            <p style={{ color: "white", textAlign: "center", fontFamily: "fair-display", fontSize: "3vh" }}>
            Dans l'histoire footbalistique française brille un héritage glorieux : les tenues <br />
            immortelles de l'équipe de France olympique. Voici, gravées dans le panthéon <br />
            du sport, les tenues sacrées de l'équipe de France de football olympique,<br />
            témoins éternels de courage, de passion et de grandeur.
            </p>
            <div style={{ width: "40%", height: "500px", marginLeft: "auto", marginRight: "auto" }}>
            <Carousel
                slides={this.slides}
                goToSlide={this.state.goToSlide}
                offsetRadius={this.state.offsetRadius}
                showNavigation={this.state.showNavigation}
                animationConfig={this.state.config}
            />
            </div>
        </div>
      </div>
    );
  }
}
