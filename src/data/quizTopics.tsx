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
    title: 'Nhận biết',
    alias: 'topic1',
    icon: <BulbIcon />,
  },
  {
    title: 'Tình huống',
    alias: 'topic2',
    icon: <BulbIcon />,
  },
  {
    title: 'Thông hiểu',
    alias: 'topic3',
    icon: <BulbIcon />,
  },
  {
    title: 'Vận dụng',
    alias: 'topic4',
    icon: <BulbIcon />,
  },
  {
    title: 'Vận dụng cao',
    alias: 'topic5',
    icon: <BulbIcon />,
  },
]
