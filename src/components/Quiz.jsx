import { createContext, useRef, useState } from 'react'
import Answers from './Answers'
import DifficultyLevels from './DifficultyLevels'
import AnswersWire from './AnswersWire'
import useTriviaApi from '../hooks/useTriviaApi'
import useQuestionSelect from '../hooks/useQuestionSelect'
import clickEvents from "../actions/clickEvents"
import Slider from './Slider'
import CategoryIcon from './CategoryIcon'
import QuizHeader from './QuizHeader'

export const Context = createContext();

export default function Quiz() {

  const listOfLevels = ["easy", "medium", "hard"]
  const [difficultyLevels, setDifficultyLevels] = useState([{level: "easy", selected: true}, {level: "medium", selected: false}, {level: "hard", selected: false}])
  const [difficulty, setDifficulty] = useState(null)
  const [numOfQuestions, setNumOfQuestions] = useState(10)

  const [questions, setQuestions] = useTriviaApi({numOfQuestions, difficulty, listOfLevels})
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null)
  const [question, category, correctAnswer, allAnswers] = useQuestionSelect({questions, currentQuestionIndex})
  const allAnswerElRefs = useRef([])
  
  const selectedAnswer = useRef(null)
  const startGameBtnRef = useRef()
  
  if (!listOfLevels.includes(difficulty)) return (
    <div className="quiz-container flex-container">
      <QuizHeader />
      <div className="quiz-body flex-container centre">
        <img src="brain.png" alt="brain icon with a question mark" className="category-icon" />
        <p className="question no-text-select">Select difficulty level</p>
        <Context.Provider value={setDifficultyLevels}>
          <DifficultyLevels difficultyLevels={difficultyLevels} />
        </Context.Provider>
      </div>
      <div className="quiz-footer">
        <Slider numOfQuestions={numOfQuestions} setNumOfQuestions={setNumOfQuestions} />
        <button className="submit-answer-btn" onClick={() => clickEvents.startGame({difficultyLevels, setDifficulty, setCurrentQuestionIndex})}>Start</button>
      </div>
    </div>
  )

  if(questions.length === 0) return (
    <div className="quiz-container">
      <QuizHeader />
      <div className="quiz-body flex-container centre">
        <div className="loading"></div>
        <AnswersWire />
      </div>
    </div>
  )
  
  return (
    <div className="quiz-container">
      <QuizHeader />
      <div className="quiz-body flex-container centre">
        <CategoryIcon category={category} />
        <p className="question no-text-select">{question}</p>
        <Context.Provider value={selectedAnswer}>
          <Answers answers={allAnswers} allAnswerElRefs={allAnswerElRefs} />
        </Context.Provider>
      </div>
      <div className="quiz-footer">
        <button className="submit-answer-btn" ref={startGameBtnRef} onClick={() => clickEvents.submitAnswer({selectedAnswer, correctAnswer, allAnswerElRefs, currentQuestionIndex, setCurrentQuestionIndex, startGameBtnRef, setDifficulty, setQuestions, numOfQuestions})}>Submit</button>
        <button className="submit-answer-btn" onClick={() => clickEvents.resetGame({setDifficulty, setQuestions})}>Reset</button>
      </div>
    </div>
  )
}

