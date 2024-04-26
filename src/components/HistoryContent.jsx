import React from 'react';
import styled from 'styled-components';
import teamPhoto from '../../public/team-photo.png'; 
import celebrationPhoto from '../../public/celebration-photo.png'; 
import medalPhoto from '../../public/medal-photo.png'; 

const HistoryContent = () => {
  return (
    <Content>
      <Image src={teamPhoto} alt="Team Photo" />
      <Image src={celebrationPhoto} alt="Celebration Photo" />
      <Image src={medalPhoto} alt="Medal Ceremony Photo" />
      <TextBlock>
        <p>À l'été 1984, la France de Michel Platini remporte l'Euro à domicile.</p>
        <p>[...Autre texte...]</p>
        <p>[...Autre texte...]</p>
      </TextBlock>
    </Content>
  );
};

const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;

  margin-bottom: 1em;
`;

const TextBlock = styled.div`
  background-color: white;
  padding: 1em;

  margin: 1em;
`;

export default HistoryContent;
