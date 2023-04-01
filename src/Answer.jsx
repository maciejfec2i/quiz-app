import { useRef, useContext } from 'react'
import answerSelection from './clickEvents'
import { SelectedAnswerContext } from './Quiz'

export default function Answer({ answer }) {
  const answerRef = useRef()
  const selectedAnswer = useContext(SelectedAnswerContext)

  return (
    <div className="answer" ref={answerRef} onClick={() => answerSelection({answerRef, selectedAnswer})}>{answer}</div>
  )
}
