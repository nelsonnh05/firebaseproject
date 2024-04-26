import React from 'react';
import NavBar from '../components/NavBar';
import TitleSection from '../components/TitleSection';
import Menu from '../components/Menu';
import AthleteImage from '../components/AthleteImage';
import SocialMediaLinks from '../components/SocialMediaLinks';
import Background from '../components/Background';

const HomeScreen = () => {
  return (
    <>
<NavBar leftLogo="../public/leftLogo.png" rightLogo="../public/rightLogo.png" />
      <TitleSection />
      <Menu />
      <AthleteImage src="../public/athlete-image.png" />
      <Background/>
      <SocialMediaLinks />
    </>
  );
}

export default HomeScreen;
