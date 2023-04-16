import { useContext } from 'react'
import { Context } from '../context/context'
import DifficultyLevels from './DifficultyLevels'
import AnswersWire from './AnswersWire'
import CategoryIcon from './CategoryIcon'
import Answers from './Answers'

export default function QuizBody() {

  const context = useContext(Context)
  const difficulty = context.difficulty
  const questions = context.questions
  const currentQuestion = context.currentQuestion
  const allAnswers = context.allAnswers
  const selectionDisabled = context.selectionDisabled

  if(!difficulty) return (
    <div className="quiz-body flex-container centre">
      <img src="brain.png" alt="brain icon with a question mark" className="category-icon" />
      <p className="question no-text-select">Select difficulty level</p>
      <DifficultyLevels />
    </div>
  )
  
  if(questions?.length === 0) return (
    <div className="quiz-body flex-container centre">
      <div className="loading"></div>
      <AnswersWire />
    </div>
  )

  return (
    <div className="quiz-body flex-container centre">
      <CategoryIcon />
      <p className="question no-text-select">{currentQuestion.question}</p>
      <Answers />
    </div>
  )
}
