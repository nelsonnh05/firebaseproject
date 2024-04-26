import React from 'react';
import NavBar from '../components/NavBar';
import Background from '../components/Background';
import SocialMediaLinks from '../components/SocialMediaLinks';
import HistoryContent from '../components/HistoryContent';
import HistoryNav from '../components/HistoryNav';
import styled from 'styled-components';

const HistoryScreen = () => {
  return (
    <>
      <NavBar leftLogo="/leftLogo.png" rightLogo="/rightLogo.png" />
      <Background />
      <HistoryNav />
      <HistoryContent />
      <SocialMediaLinks />
    </>
  );
};

export default HistoryScreen;
