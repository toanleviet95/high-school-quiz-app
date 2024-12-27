import { FC } from 'react'
import styled from 'styled-components'
import { useQuiz } from '../../../context/QuizContext'
import { ScreenTypes } from '../../../types'

import { ReactComponent as BulbIcon } from '../../../assets/icons/bulb.svg'

import Button from '../Button'

export const ButtonStyle = styled.div`
  color: #800080;
  font-size: clamp(16px, 5vw, 24px);
  cursor: pointer;
`

const PDFGuide: FC = () => {
  const { setCurrentScreen } = useQuiz()
  
  const goToGuidanceScreen = () => {
    setCurrentScreen(ScreenTypes.GuidanceScreen);
    // window.open('https://sheeple.click/Guidance.pdf', '_blank');
  }
  
  return (
    <Button icon={<BulbIcon />} iconPosition="left" text="Đọc cẩm nang" onClick={goToGuidanceScreen} big width="400px" />
  );
};

export default PDFGuide
