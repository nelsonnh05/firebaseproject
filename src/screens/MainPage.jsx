import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from React Router
import '../css/MainPage.css'; // Import CSS file for styling
import menuIcon from '../photos/MENUBLANC.png'; // Import your image
import logo from '../photos/LogoJOBLANC.png'; 

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
            
            {/* Logo */}
            <img src={logo} alt="Logo" className="logo" />
            {/* Menu Container */}
            <div className="menu-container">
                {/* Image for Menu */}
                <img src={menuIcon} alt="Menu" className="menu-icon" />
                {/* Menu */}
                <div className="menu">
                    <ul>
                       
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
