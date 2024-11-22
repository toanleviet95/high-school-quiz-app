import styled from 'styled-components'

import AppLogo from '../ui/AppLogo'
import { StartIcon } from '../../config/icons'
import { useQuiz } from '../../context/QuizContext'
import {
  CenterCardContainer,
  HighlightedText,
  LogoContainer,
  PageCenter,
} from '../../styles/Global'
import { ScreenTypes } from '../../types'
import { convertSeconds } from '../../utils/helpers'

import Button from '../ui/Button'

const AppTitle = styled.h2`
  font-weight: 700;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.themeColor};
`

const DetailTextContainer = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 40px;
  text-align: center;
  max-width: 500px;
`

const DetailText = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-top: 15px;
  line-height: 1.3;
`

const QuizDetailsScreen = () => {
  const { setCurrentScreen, quizDetails } = useQuiz()

  const { totalQuestions, totalScore, totalTime } = quizDetails

  const goToQuestionScreen = () => {
    setCurrentScreen(ScreenTypes.QuestionScreen)
  }

  return (
    <PageCenter light justifyCenter>
      <CenterCardContainer>
        <LogoContainer>
          <AppLogo />
        </LogoContainer>
        <AppTitle>Sheeple</AppTitle>
        <DetailTextContainer>
          <DetailText>
            Số câu hỏi bạn sẽ trả lời:{' '}
            <HighlightedText>{totalQuestions}</HighlightedText>
          </DetailText>
          <DetailText>
            Số điểm: <HighlightedText>{totalScore}</HighlightedText>
          </DetailText>
          <DetailText>
            Thời gian cần hoàn thành: <HighlightedText>{convertSeconds(totalTime)}</HighlightedText>
          </DetailText>
        </DetailTextContainer>
        <Button
          text="Bắt đầu thôi"
          icon={<StartIcon />}
          iconPosition="left"
          onClick={goToQuestionScreen}
          bold
        />
      </CenterCardContainer>
    </PageCenter>
  )
}

export default QuizDetailsScreen
