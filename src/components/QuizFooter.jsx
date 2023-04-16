import { useContext } from 'react'
import Slider from './Slider'
import { Context } from '../context/context'
import clickEvents from "../actions/clickEvents"

export default function QuizFooter() {

  const context = useContext(Context)
  const numOfQuestions = context.numOfQuestions
  const setNumOfQuestions = context.setNumOfQuestions
  const difficulty = context.difficulty
  const difficultyLevels = context.difficultyLevels
  const setDifficulty = context.setDifficulty
  const setCurrentQuestionIndex = context.setCurrentQuestionIndex
  const allAnswers = context.allAnswers
  const setAllAnswers = context.setAllAnswers
  const currentQuestionIndex = context.currentQuestionIndex
  const setQuestions = context.setQuestions
  const correctAnswer = context.correctAnswer
  const selectionDisabled = context.selectionDisabled
  
  if(difficulty === null) return (
    <div className="quiz-footer">
      <Slider numOfQuestions={numOfQuestions} setNumOfQuestions={setNumOfQuestions} />
      <button className="submit-answer-btn" onClick={() => clickEvents.startGame({difficultyLevels, setDifficulty, setCurrentQuestionIndex})}>Start</button>
    </div>
  )

  return (
    <div className="quiz-footer">
      <button disabled={selectionDisabled.current} className="submit-answer-btn" onClick={() => clickEvents.submitAnswer({allAnswers, setAllAnswers, currentQuestionIndex, setCurrentQuestionIndex, selectionDisabled, setDifficulty, setQuestions, numOfQuestions, correctAnswer})}>Submit</button>
      <button className="submit-answer-btn" onClick={() => clickEvents.resetGame({setDifficulty, setQuestions})}>Reset</button>
    </div>
  )
}
