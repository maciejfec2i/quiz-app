import { useRef, useContext } from 'react'
import clickEvents from '../actions/clickEvents'
import { Context } from '../context/context'

export default function Answer({ answer }) {
  const answerRef = useRef()
  const context = useContext(Context)
  const answers = context.allAnswers
  const setAllAnswers = context.setAllAnswers
  const selectionDisabled = context.selectionDisabled

  const answerSelected = answer.selected ? " selected-answer" : ""
  const answerCorrect = answer.correct ? " correct-answer" : "" 
  const answerIncorrect = answer.correct !== undefined && !answer.correct ? " incorrect-answer" : ""

  return (
    <div className={"answer no-text-select" + (answerSelected + answerCorrect + answerIncorrect)} ref={answerRef} onClick={() => clickEvents.select({listOfItems: answers, setSelected: setAllAnswers, itemRef: answerRef, selectionDisabled})}>{answer.value}</div>
  )
}
