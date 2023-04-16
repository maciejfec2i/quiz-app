import { useRef, useState } from 'react'
import Answers from './Answers'
import DifficultyLevels from './DifficultyLevels'
import AnswersWire from './AnswersWire'
import useTriviaApi from '../hooks/useTriviaApi'
import useQuestionSelect from '../hooks/useQuestionSelect'
import CategoryIcon from './CategoryIcon'
import QuizHeader from './QuizHeader'
import QuizFooter from './QuizFooter'
import { Context } from '../context/context'

export default function Quiz() {

  const [difficultyLevels, setDifficultyLevels] = useState([{value: "easy", selected: true}, {value: "medium", selected: false}, {value: "hard", selected: false}])
  const [difficulty, setDifficulty] = useState(null)
  const [numOfQuestions, setNumOfQuestions] = useState(10)

  const [questions, setQuestions] = useTriviaApi({numOfQuestions, difficulty})
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null)
  const [currentQuestion, allAnswers, setAllAnswers] = useQuestionSelect({questions, currentQuestionIndex})

  const selectionDisabled = useRef(false)
  
  if (difficulty === null) return (
    <div className="quiz-container flex-container">
      <QuizHeader />
      <div className="quiz-body flex-container centre">
        <img src="brain.png" alt="brain icon with a question mark" className="category-icon" />
        <p className="question no-text-select">Select difficulty level</p>
        <Context.Provider value={setDifficultyLevels}>
          <DifficultyLevels difficultyLevels={difficultyLevels} />
        </Context.Provider>
      </div>
      <Context.Provider value={{difficulty, numOfQuestions, setNumOfQuestions, difficultyLevels, setDifficulty, setCurrentQuestionIndex}}>
        <QuizFooter />
      </Context.Provider>
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
        <CategoryIcon category={currentQuestion.category} />
        <p className="question no-text-select">{currentQuestion.question}</p>
        <Context.Provider value={setAllAnswers}>
          <Answers answers={allAnswers} selectionDisabled={selectionDisabled} />
        </Context.Provider>
      </div>
      <Context.Provider value={{selectionDisabled, allAnswers, setAllAnswers, currentQuestionIndex, setCurrentQuestionIndex, setDifficulty, setQuestions, numOfQuestions, correctAnswer: currentQuestion.correctAnswer}}>
        <QuizFooter />
      </Context.Provider>
    </div>
  )
}

