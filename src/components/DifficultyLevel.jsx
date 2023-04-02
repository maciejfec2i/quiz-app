import React, { useContext, useRef } from 'react'
import { Context } from './Quiz'
import clickEvents from '../actions/clickEvents'

export default function DifficultyLevel({ difficultyLevel }) {

  const difficultyRef = useRef() 
  const selectedDifficulty = useContext(Context)

  return (
    <div className="answer no-text-select" ref={difficultyRef} onClick={() => clickEvents.answerSelection({answerRef: difficultyRef, selectedAnswer: selectedDifficulty})}>{difficultyLevel}</div>
  )
}
