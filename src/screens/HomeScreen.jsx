import React from 'react';
import NavBar from '../components/NavBar';
import TitleSection from '../components/TitleSection';
import Menu from '../components/Menu';
import AthleteImage from '../components/AthleteImage';
import SocialMediaLinks from '../components/SocialMediaLinks';

const HomeScreen = () => {
  return (
    <>
      <NavBar />
      <TitleSection />
      <Menu />
      <AthleteImage src="../public/athlete-image.png" />
      <SocialMediaLinks />
    </>
  );
}

export default HomeScreen;
