import React from 'react';
import styled from 'styled-components';
import Button from '../ui/Button'
import { useQuiz } from '../../context/QuizContext'

import { ScreenTypes } from '../../types'
import { teamMembers } from '../../data/teamInfo';

import {
  CenterCardContainer,
  PageCenter,
  HighlightedText,
} from '../../styles/Global'

const Heading = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
`

const AboutTeam: React.FC = () => {
  const { setCurrentScreen } = useQuiz()
  
  const goToBack = () => {
    setCurrentScreen(ScreenTypes.QuizTopicsScreen)
  }

  return (
    <PageCenter light justifyCenter>
      <CenterCardContainer>
        <Heading>
          <HighlightedText>Giới thiệu về nhóm Sheeple</HighlightedText>
        </Heading>
        <TeamContainer>
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index}>
              {member.avatar}
              <Name>{member.name}</Name>
              <Role>{member.role}</Role>
              <Description dangerouslySetInnerHTML={{ __html: member.description }}></Description>
            </TeamMemberCard>
          ))}
        </TeamContainer>
        <BackContainer>
          <Button text="Quay về" onClick={goToBack} big width="360px" />
        </BackContainer>
      </CenterCardContainer>
    </PageCenter>
  );
};

export default AboutTeam;

const BackContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
`;

const TeamContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
`;

const TeamMemberCard = styled.div`
  max-width: 250px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.h3`
  font-size: 1.5em;
  margin: 10px 0;
`;

const Role = styled.p`
  font-weight: bold;
  line-height: 24px;
`;

const Description = styled.p`
  font-size: 0.9em;
  margin-top: 22px;
  line-height: 24px;
`;
