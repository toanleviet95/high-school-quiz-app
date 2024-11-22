import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { getFirestore, collection, addDoc } from "firebase/firestore";

import { CheckIcon, Next, TimerIcon } from '../../config/icons'
import { useQuiz } from '../../context/QuizContext'
import { useTimer } from '../../hooks'
import { device } from '../../styles/BreakPoints'
import { PageCenter } from '../../styles/Global'
import { ScreenTypes } from '../../types'

import Button from '../ui/Button'
import ModalWrapper from '../ui/ModalWrapper'
import Question from './Question'
import QuizHeader from './QuizHeader'

import { convertSeconds } from '../../utils/helpers'

const QuizContainer = styled.div<{ selectedAnswer: boolean }>`
  width: 900px;
  min-height: 500px;
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 4px;
  padding: 30px 60px 80px 60px;
  margin-bottom: 70px;
  position: relative;
  @media ${device.md} {
    width: 100%;
    padding: 15px 15px 80px 15px;
  }
  button {
    span {
      svg {
        path {
          fill: ${({ selectedAnswer, theme }) =>
            selectedAnswer ? `${theme.colors.buttonText}` : `${theme.colors.darkGray}`};
        }
      }
    }
  }
`

const ButtonWrapper = styled.div`
  position: absolute;
  right: 60px;
  bottom: 30px;
  display: flex;
  gap: 20px;
  @media ${device.sm} {
    justify-content: flex-end;
    width: 90%;
    right: 15px;
  }
`

interface QuizResult {
  username: string;
  score: number;
  totalQuestionAttempted: number;
  totalTime: string;
  status: string;
}

const QuestionScreen: FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number>(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string[]>([])
  const [showTimerModal, setShowTimerModal] = useState<boolean>(false)
  const [showResultModal, setShowResultModal] = useState<boolean>(false)

  const {
    questions,
    quizDetails,
    result,
    setResult,
    setCurrentScreen,
    timer,
    setTimer,
    setEndTime,
    currentUser,
    endTime
  } = useQuiz()

  const currentQuestion = questions[activeQuestion]

  const { question, type, choices, code, image, correctAnswers } = currentQuestion

  const onClickNext = () => {
    const isMatch: boolean =
      selectedAnswer.length === correctAnswers.length &&
      selectedAnswer.every((answer) => correctAnswers.includes(answer))

    // adding selected answer, and if answer matches key to result array with current question
    setResult([...result, { ...currentQuestion, selectedAnswer, isMatch }])

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1)
    } else {
      // how long does it take to finish the quiz
      const timeTaken = quizDetails.totalTime - timer
      setEndTime(timeTaken)
      setShowResultModal(true)
    }
    setSelectedAnswer([])
  }

  const handleAnswerSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target

    if (type === 'MAQs') {
      if (selectedAnswer.includes(name)) {
        setSelectedAnswer((prevSelectedAnswer) =>
          prevSelectedAnswer.filter((element) => element !== name)
        )
      } else {
        setSelectedAnswer((prevSelectedAnswer) => [...prevSelectedAnswer, name])
      }
    }

    if (type === 'MCQs' || type === 'boolean') {
      if (checked) {
        setSelectedAnswer([name])
      }
    }
  }
  
  const storeQuizResult = async (
    score: number,
    totalQuestionAttempted: number,
    totalTime: string,
    status: string
  ): Promise<string> => {
    try {
      if (!currentUser) {
        throw new Error("User not authenticated");
      }
  
      const db = getFirestore();
  
      // Prepare the data to store
      const quizResult: QuizResult = {
        username: currentUser?.email || currentUser?.phoneNumber || "Anonymous", // Use displayName or email, fallback to "Anonymous"
        score: score,
        totalQuestionAttempted: totalQuestionAttempted,
        totalTime: totalTime,
        status: status,
      };
  
      // Add the data to the "quiz_results" collection
      const docRef = await addDoc(collection(db, "quiz_results"), quizResult);
  
      console.log("Quiz result stored with ID:", docRef.id);
      return docRef.id;
    } catch (error) {
      console.error("Error storing quiz result:", error);
      throw error;
    }
  };

  const handleModal = () => {
    const totalQuestionAttempted = result.length

    const obtainedScore = result
      .filter((item) => item.isMatch && typeof item.score === 'number')
      .reduce((accumulator, currentValue) => accumulator + (currentValue.score || 0), 0)
  
    // Passed if 50 or more than 50% marks
    const calculateStatus =
      (obtainedScore / quizDetails.totalScore) * 100 >= 50 ? 'Đạt' : 'Không đạt'

    storeQuizResult(obtainedScore, totalQuestionAttempted, convertSeconds(endTime), calculateStatus)
    .then((docId) => console.log("Stored with document ID:", docId))
    .catch((err) => console.error("Error:", err));
    setCurrentScreen(ScreenTypes.ResultScreen)
    document.body.style.overflow = 'auto'
  }

  // to prevent scrolling when modal is opened
  useEffect(() => {
    if (showTimerModal || showResultModal) {
      document.body.style.overflow = 'hidden'
    }
  }, [showTimerModal, showResultModal])

  // timer hooks, handle conditions related to time
  useTimer(timer, quizDetails, setEndTime, setTimer, setShowTimerModal, showResultModal)

  return (
    <PageCenter>
      <QuizContainer selectedAnswer={selectedAnswer.length > 0}>
        <QuizHeader
          activeQuestion={activeQuestion}
          totalQuestions={quizDetails.totalQuestions}
          timer={timer}
        />
        <Question
          question={question}
          code={code}
          image={image}
          choices={choices}
          type={type}
          handleAnswerSelection={handleAnswerSelection}
          selectedAnswer={selectedAnswer}
        />
        <ButtonWrapper>
          <Button
            text={activeQuestion === questions.length - 1 ? 'Hoàn thành' : 'Tiếp tục'}
            onClick={onClickNext}
            icon={<Next />}
            iconPosition="right"
            disabled={selectedAnswer.length === 0}
          />
        </ButtonWrapper>
      </QuizContainer>
      {/* timer or finish quiz modal*/}
      {(showTimerModal || showResultModal) && (
        <ModalWrapper
          title={showResultModal ? 'Đã hoàn tất!' : 'Thời gian đã hết!'}
          subtitle={`Bạn vừa hoàn thành ${result.length} câu hỏi.`}
          onClick={handleModal}
          icon={showResultModal ? <CheckIcon /> : <TimerIcon />}
          buttonTitle="XEM KẾT QUẢ"
        />
      )}
    </PageCenter>
  )
}

export default QuestionScreen
