import styled from 'styled-components';

import Button from '../ui/Button'
import { useQuiz } from '../../context/QuizContext'

import { ScreenTypes } from '../../types'

import {
  CenterCardContainer,
  PageCenter,
  HighlightedText,
  HighlightedLink,
} from '../../styles/Global'

import Guidance_1_Image from  '../../assets/images/guidance/guidance_1.png';
import Guidance_2_Image from  '../../assets/images/guidance/guidance_2.png';

const Heading = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
`

const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`

const BackContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  flex-direction: column;
  gap: 16px;
`;

const GuideItem = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 22px;
`

const guidanceList = [
  {
    title: 'Cẩm nang Hiệu ứng tâm lý đám đông',
    link: './Guidance_1.pdf',
    src: Guidance_1_Image,
  },
  {
    title: 'Cẩm nang Bảo vệ trẻ em trên không gian mạng',
    link: './Guidance_2.pdf',
    src: Guidance_2_Image
  }
];

const Guidance: React.FC = () => {
  const { setCurrentScreen } = useQuiz()
  
  const goToBack = () => {
    setCurrentScreen(ScreenTypes.QuizTopicsScreen)
  }
  
  return (
    <PageCenter light justifyCenter>
      <CenterCardContainer>
        <Heading>
          <HighlightedText>Mời bạn đọc những bộ cẩm nang:</HighlightedText>
        </Heading>
        <LinkList>
          {guidanceList.map(guidance => (
            <GuideItem key={guidance.link} target="_blank" href={guidance.link}>
              <HighlightedLink>{'>> '}{guidance.title}</HighlightedLink>
              <div><img style={{ width: 220 }} src={guidance.src} alt={guidance.title} /></div>
            </GuideItem>
          ))}
        </LinkList>
        <BackContainer>
          <Button text="Quay về" onClick={goToBack} big width="360px" />
        </BackContainer>
      </CenterCardContainer>
    </PageCenter>
  );
};

export default Guidance;
