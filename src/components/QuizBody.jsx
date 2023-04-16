import { useContext } from 'react'
import { Context } from '../context/context'
import DifficultyLevels from './DifficultyLevels'
import AnswersWire from './AnswersWire'

export default function QuizBody() {

  const context = useContext(Context)
  const difficulty = context.difficulty
  const questions = context.questions
  const difficultyLevels = context.difficultyLevels
  
  if(questions?.length === 0) return (
    <div className="quiz-body flex-container centre">
      <div className="loading"></div>
      <AnswersWire />
    </div>
  )
}
