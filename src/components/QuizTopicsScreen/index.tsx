import styled from 'styled-components'

import AppLogo from '../ui/AppLogo'
import Introduction from '../ui/Introduction';
import FacebookTag from '../ui/FacebookTag';
import PDFGuide from '../ui/PDFGuide';

import { useQuiz } from '../../context/QuizContext'
import { quizTopics } from '../../data/quizTopics'
import { device } from '../../styles/BreakPoints'
import {
  CenterCardContainer,
  HighlightedText,
  LogoContainer,
  PageCenter,
  DividerWithText,
} from '../../styles/Global'
import { ScreenTypes } from '../../types'
import { ReactComponent as BulbIcon } from '../../assets/icons/bulb.svg'

import Button from '../ui/Button'

const Heading = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
`

const DetailText = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
`

const SelectButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 60%;
  gap: 30px;
  margin-top: 40px;
  margin-bottom: 45px;
  @media ${device.md} {
    row-gap: 20px;
    column-gap: 20px;
    max-width: 100%;
  }
`

interface SelectButtonProps {
  active: boolean
  disabled?: boolean
}

const SelectButton = styled.div<SelectButtonProps>`
  background-color: ${({ disabled, theme }) =>
    disabled ? `${theme.colors.disabledCard}` : `${theme.colors.selectTopicBg}`};
  border: ${({ active, theme }) =>
    active
      ? `2px solid ${theme.colors.themeColor}`
      : `1px solid ${theme.colors.disabledButton}`};
  transition: background-color 0.4s ease-out;
  border-radius: 10px;
  padding: 14px 10px;
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  @media ${device.md} {
    padding: 10px;
    tap-highlight-color: transparent;
    -webkit-tap-highlight-color: transparent;
  }
`

const SelectButtonText = styled.span`
  font-size: 18px;
  font-weight: 600;
  margin-left: 10px;
  @media ${device.md} {
    font-size: 16px;
    font-weight: 500;
  }
`

const QuizTopicsScreen: React.FC = () => {
  const { quizTopic, selectQuizTopic, setCurrentScreen } = useQuiz()

  const goToQuizDetailsScreen = () => {
    setCurrentScreen(ScreenTypes.QuizDetailsScreen)
  }
  
  const goToAboutUsScreen = () => {
    setCurrentScreen(ScreenTypes.AboutUsScreen)
  }

  return (
    <PageCenter light justifyCenter>
      <CenterCardContainer>
        <LogoContainer>
          <AppLogo />
        </LogoContainer>
        <Heading>
          <HighlightedText>Sheeple chào mừng bạn</HighlightedText>
        </Heading>
        <DetailText>Trắc nghiệm vui để hiểu thêm về tầm ảnh hưởng của Hiệu ứng tâm lý đám đông</DetailText>
        <DetailText>Vui lòng chọn bộ câu hỏi phía dưới bạn nhé!</DetailText>
        <SelectButtonContainer>
          {quizTopics.map(({ title, icon, disabled, alias }) => (
            <SelectButton
              key={alias}
              active={quizTopic === alias}
              onClick={() => !disabled && selectQuizTopic(alias)}
              disabled={disabled}
            >
              {icon}
              <SelectButtonText>{title}</SelectButtonText>
            </SelectButton>
          ))}
        </SelectButtonContainer>
        <Button text="Tiếp tục" onClick={goToQuizDetailsScreen} bold />
        <br />
        <DividerWithText />
        <PDFGuide />
        <br />
        <Button icon={<BulbIcon />} iconPosition="left" text="Giới thiệu về nhóm" onClick={goToAboutUsScreen} width="400px" />
        <DividerWithText />
        <LogoContainer>
          <Introduction />
          <FacebookTag />
        </LogoContainer>
      </CenterCardContainer>
    </PageCenter>
  )
}

export default QuizTopicsScreen
