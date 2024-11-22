import { FC, memo } from 'react'
import styled from 'styled-components'

import { device } from '../../../styles/BreakPoints'
import { HighlightedText } from '../../../styles/Global'

const ResultOverviewStyle = styled.div`
  text-align: center;
  margin-bottom: 70px;
  @media ${device.md} {
    margin-bottom: 30px;
  }
  p {
    margin-top: 15px;
    font-weight: 500;
    font-size: 18px;
  }
`

interface ResultOverviewProps {
  totalQuestionAttempted: number
  totalQuestions: number
  obtainedScore: number
  totalScore: number
  calculateStatus: string
  endTime: string
}

const ResultOverview: FC<ResultOverviewProps> = ({ totalQuestionAttempted, totalQuestions, obtainedScore, totalScore, calculateStatus, endTime }) => {
  return (
    <ResultOverviewStyle>
      <p>
        Số câu hỏi đã trả lời:{' '}
        <HighlightedText> {totalQuestionAttempted} </HighlightedText>/{' '}
        {totalQuestions}
      </p>
      <p>
        Số điểm:<HighlightedText> {obtainedScore} </HighlightedText>/{' '}
        {totalScore}
      </p>
      <p>
        Thời gian hoàn thành:<HighlightedText> {endTime} </HighlightedText>
      </p>
      <p>
        Kết quả:<HighlightedText> {calculateStatus}</HighlightedText>
      </p>
    </ResultOverviewStyle>
  )
}

export default memo(ResultOverview)
