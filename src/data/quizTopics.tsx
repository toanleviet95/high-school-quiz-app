import { ReactNode } from 'react'
import { ReactComponent as BulbIcon } from '../assets/icons/bulb.svg'

type QuizTopic = {
  title: string
  alias: string
  icon: ReactNode
  disabled?: boolean
}

export const quizTopics: QuizTopic[] = [
  {
    title: 'Bộ câu hỏi số 1',
    alias: 'topic1',
    icon: <BulbIcon />,
  },
  {
    title: 'Bộ câu hỏi số 2',
    alias: 'topic2',
    icon: <BulbIcon />,
  },
]
