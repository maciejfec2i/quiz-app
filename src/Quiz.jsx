import { createContext, useRef } from 'react';
import Answers from './Answers'
import palette from "./assets/palette.png"

export const SelectedAnswerContext = createContext();

export default function Quiz() {

  const answers = ["120202", "45000", "4", "8898437"]
  const selectedAnswer = useRef(null)

  return (
    <div className="quiz-container">
      <div className="quiz-header flex-container centre">
        <h1 className="title">Quiz App</h1>
      </div>
      <div className="quiz-body flex-container centre">
        <img src={palette} alt="art colour paletter" className="category-icon" />
        <p className="question"> What is 2 + 2?</p>
        <SelectedAnswerContext.Provider value={selectedAnswer}>
          <Answers answers={answers} />
        </SelectedAnswerContext.Provider>
      </div>
      <div className="quiz-footer">
        <button className="submit-answer-btn">Submit</button>
      </div>
    </div>
  )
}

