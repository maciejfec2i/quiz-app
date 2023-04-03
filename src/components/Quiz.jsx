import { createContext, useRef, useState } from 'react'
import Answers from './Answers'
import DifficultyLevels from './DifficultyLevels'
import AnswersWire from './AnswersWire'
import useTriviaApi from '../hooks/useTriviaApi'
import useQuestionSelect from '../hooks/useQuestionSelect'
import clickEvents from "../actions/clickEvents"
import artIcon from "../assets/palette.png"
import sportIcon from "../assets/bike.png"
import generalKnowledgeIcon from "../assets/book.png"
import scienceIcon from "../assets/chemistry.png"
import foodIcon from "../assets/fast-food.png"
import musicIcon from "../assets/guitar.png"
import gepgraphyIcon from "../assets/map.png"
import historyIcon from "../assets/parchment.png"
import societyIcon from "../assets/sociology.png"
import filmIcon from "../assets/watching.png"
import Slider from './Slider'

export const Context = createContext();

export default function Quiz() {

  const difficultyLevels = ["easy", "medium", "hard"]
  const selectedDifficulty = useRef(null)
  const [difficulty, setDifficulty] = useState(null)
  const [numOfQuestions, setNumOfQuestions] = useState(10)

  const [questions, setQuestions] = useTriviaApi({numOfQuestions, difficulty, difficultyLevels})
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null)
  const [question, category, correctAnswer, allAnswers] = useQuestionSelect({questions, currentQuestionIndex})
  const allAnswerElRefs = useRef([])
  const categoryIcons = {
    "Arts & Literature": artIcon,
    "Film & TV": filmIcon,
    "Food & Drink": foodIcon,
    "General Knowledge": generalKnowledgeIcon,
    "Geography": gepgraphyIcon,
    "History": historyIcon,
    "Music": musicIcon,
    "Science": scienceIcon,
    "Society & Culture": societyIcon,
    "Sport & Leisure": sportIcon
  }
  const selectedAnswer = useRef(null)
  const startGameBtnRef = useRef()
  
  if (!difficultyLevels.includes(difficulty)) return (
    <div className="quiz-container flex-container">
      <div className="quiz-header flex-container centre">
        <h1 className="title no-text-select">Quiz App</h1>
      </div>
      <div className="quiz-body flex-container centre">
        <img src="../../public/brain.png" alt="brain icon with a question mark" className="category-icon" />
        <p className="question no-text-select">Select difficulty level</p>
        <Context.Provider value={selectedDifficulty}>
          <DifficultyLevels difficultyLevels={difficultyLevels} />
        </Context.Provider>
      </div>
      <div className="quiz-footer">
        <Slider numOfQuestions={numOfQuestions} setNumOfQuestions={setNumOfQuestions} />
        <button className="submit-answer-btn" onClick={() => clickEvents.startGame({selectedDifficulty, setDifficulty, setCurrentQuestionIndex})}>Start</button>
      </div>
    </div>
  )

  if(questions.length === 0) return (
    <div className="quiz-container">
      <div className="quiz-header flex-container centre">
        <h1 className="title no-text-select">Quiz App</h1>
      </div>
      <div className="quiz-body flex-container centre">
        <div className="loading"></div>
        <AnswersWire />
      </div>
    </div>
  )
  
  return (
    <div className="quiz-container">
      <div className="quiz-header flex-container centre">
        <h1 className="title no-text-select">Quiz App</h1>
      </div>
      <div className="quiz-body flex-container centre">
        <img src={categoryIcons[category]} alt="art colour palette" className="category-icon" />
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

