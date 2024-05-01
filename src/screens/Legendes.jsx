import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import '../css/Leg.css'; 
import menuIcon from '../photos/MENUBLANC.png'; 
import logo from '../photos/LogoJOBLANC.png';
import slide1 from '../photos/slide1.png';
import slide2 from '../photos/slide2.png';
import slide3 from '../photos/slide3.png';
import slide4 from '../photos/slide4.png';
import slide5 from '../photos/slide5.png';
import arrow from '../photos/marketeq_up-arrow.png';
import prout from '../photos/prout.png';
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";

class Legendes extends Component {
    state = {
      goToSlide: 0,
      offsetRadius: 2,
      showNavigation: true,
      config: config.gentle,
      autoplay: true,
      interval: 3000 // Interval between automatic transitions (in milliseconds)
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
          goToSlide: (prevState.goToSlide + 1) % this.slides.length // This creates a loop in the carousel
        }));
      }, this.state.interval);
    };
  
    slides = [
      { img: slide1, year: 1900 },
      { img: slide2, year: 1920 },
      { img: slide3, year: 1976 },
      { img: slide4, year: 1984 },
      { img: slide5, year: 2020 }
    ].map((item, index) => ({
      key: uuidv4(),
      content: <img src={item.img} alt={`${item.year}`} />,
      onClick: () => this.setState({ goToSlide: index })
    }));
  
    render() {
      return (
        <div className="leg">
      <p className='titreu'>
            L'HISTOIRE
          </p>
          <Link to="premier"> 
            <p className='titreL'>
                LES<br/>
                LEGENDES
            </p>
          </Link>
  
          <p className='paragl'>
            Découvrez les légendes de l'équipe de France de football aux Jeux Olympiques, <br/>
            des athlètes qui ont marqué l'histoire par leur talent, leur passion et leur <br/>
            détermination. Leur héritage inspire encore aujourd'hui, symbolisant <br/>
            l'excellence et la fierté nationale sur la scène internationale.
          </p>
            
          <img src={prout} alt="prout" className="prout" />
          <img src={arrow} alt="arrow" className="arrow" />
          <img src={logo} alt="Logo" className="logo" />
          
          <div className="menu-container">
            <img src={menuIcon} alt="Menu" className="menu-icon" />
            <div className="menu">
              <Link to="/"> 
                <p>Accueil</p>
              </Link>
            </div>
          </div>

       <div style={{ position: "absolute", bottom: "-700px", left: "50%", transform: "translateX(-50%)", width: "40%", height: "500px" }}>
  <Carousel
    slides={this.slides}
    goToSlide={this.state.goToSlide}
    offsetRadius={this.state.offsetRadius}
    showNavigation={this.state.showNavigation}
    animationConfig={this.state.config}
  />
</div>
          
        </div>
      );
    }
  }
  
  export default Legendes;
  
