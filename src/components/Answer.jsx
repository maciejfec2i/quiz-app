import { useRef, useContext } from 'react'
import clickEvents from '../actions/clickEvents'
import { Context } from './Quiz'

export default function Answer({ answer, allAnswerElRefs, index }) {
  const answerRef = useRef()
  const selectedAnswer = useContext(Context)

  return (
    <div className="answer no-text-select" ref={(el) => {answerRef.current = el; allAnswerElRefs.current[index] = el}} onClick={() => clickEvents.answerSelection({answerRef, selectedAnswer})}>{answer}</div>
  )
}
