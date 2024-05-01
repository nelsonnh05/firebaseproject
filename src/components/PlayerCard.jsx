import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const PlayerCard = ({ player }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [logoUrl, setLogoUrl] = useState('');

  useEffect(() => {
    const fetchImage = async (imageName, setImage) => {
      if (imageName) {
        const storage = getStorage();
        const imageRef = ref(storage, `images/${imageName}`);
        try {
          const url = await getDownloadURL(imageRef);
          setImage(url);
        } catch (error) {
          console.error('Error loading image:', error);
          setImage('path_to_default_image'); 
        }
      }
    };

    fetchImage(player.imageName, setImageUrl);
    fetchImage('logo.png', setLogoUrl); 
  }, [player.imageName]);

  return (
    <Card>
      <PlayerImage src={imageUrl || 'path_to_default_image'} alt={player.name} />
      <InfoOverlay>
        <PlayerInfo>
          <PlayerDetail>NOM : {player.name}</PlayerDetail>
          <PlayerDetail>ÂGE : {player.age}</PlayerDetail>
          <PlayerDetail>POSTE : {player.position}</PlayerDetail>
          <PlayerDetail>CLUB : {player.club}</PlayerDetail>
          <PlayerDetail>NUMÉRO : #{player.numero}</PlayerDetail>
          {logoUrl && <Logo src={logoUrl} alt="Comité National Olympique et Sportif Français" />}
        </PlayerInfo>
      </InfoOverlay>
    </Card>
  );
};

const Card = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
  margin: 10px;
  overflow: hidden;
  background-color: #1a1a1a;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

const PlayerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoOverlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(51, 50, 50, 0.9);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const PlayerInfo = styled.div`
  text-align: center;
  color: #FFFFFF;
  font-family: playfair-display;
`;

const PlayerDetail = styled.div`
  font-size: 1em;
  margin-bottom: 5px;

`;

const Logo = styled.img`
  width: 60%;
  margin-top: 10px;
`;

export default PlayerCard;
