import React from 'react';
import { Link } from 'react-router-dom'; 
import '../css/Histoire.css'; 
import menuIcon from '../photos/MENUNOIR.png'; 
import logo from '../photos/LOGOJONOIR.png';
import reg from '../photos/Rectangle 24.png';
import reg1 from '../photos/Rectangle 25.png';
import reg2 from '../photos/Rectangle 26.png';
import reg3 from '../photos/Rectangle 27.png';



const Histoire = () => {
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

                <p className='paragf'>
                    A l'été 1984, la France de Michel Platini remporte l'Euro à <br/>
                    domicile
                </p>
                
                <p className='paragfff'>
                    Et il y avait du beau monde dans cette équipe de France en <br />
                    1984, le Girondin,Thouvnele,les Nantais Ayache et Touré et <br/>
                    les Parisiens  Philippe Jeannol et Jean Claude Lemoult, frappé <br/>
                    par la nonchalance du public américain.
                </p>
                <p className='paragg'>
                    Cette année 1984 voit le football français faire son entrée  <br />
                    parmi l’élite, mené par le magicien Michel Platini, l’équipe A<br/>
                    est championne d’Europe, tandis que l’équipe Olympique au<br/>
                    grand complet monte sur le podium à Los Angeles pour <br/>
                    recevoir la médaille d’or.
                </p>
            
                <div className="photo-container">
    <img src={reg} alt="n" className="photo" />
    <img src={reg1} alt="n" className="photo2" />
    <img src={reg2} alt="n" className="photo3" />
    <img src={reg3} alt="n" className="photo4" />
</div>


            <img src={logo} alt="Logo" className="logo" />
          
            
            <div className="menu-container">
                
                <img src={menuIcon} alt="Menu" className="menu-icon" />
                
                <div className="menu">
                    
                    <Link to="/"> 
                <p >
                   acceuil
                </p>
                </Link>
                    
                </div>
            </div>
        </div>
    );
}

export default Histoire;