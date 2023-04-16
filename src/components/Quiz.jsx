import { useRef, useState } from 'react'
import useTriviaApi from '../hooks/useTriviaApi'
import useQuestionSelect from '../hooks/useQuestionSelect'
import { Context } from '../context/context'
import QuizHeader from './QuizHeader'
import QuizBody from './QuizBody'
import QuizFooter from './QuizFooter'

export default function Quiz() {

  const [difficultyLevels, setDifficultyLevels] = useState([{value: "easy", selected: true}, {value: "medium", selected: false}, {value: "hard", selected: false}])
  const [difficulty, setDifficulty] = useState(null)
  const [numOfQuestions, setNumOfQuestions] = useState(10)
  const [questions, setQuestions] = useTriviaApi({numOfQuestions, difficulty})
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null)
  const [currentQuestion, allAnswers, setAllAnswers] = useQuestionSelect({questions, currentQuestionIndex})
  const selectionDisabled = useRef(false)

  return (
    <div className="quiz-container flex-container">
      <QuizHeader />
      <Context.Provider value={{difficultyLevels, setDifficultyLevels, difficulty, setDifficulty, numOfQuestions, setNumOfQuestions, questions, setQuestions, currentQuestionIndex, setCurrentQuestionIndex, currentQuestion, allAnswers, setAllAnswers, selectionDisabled}}>
        <QuizBody />
        <QuizFooter />
      </Context.Provider>
    </div>
  )
}

