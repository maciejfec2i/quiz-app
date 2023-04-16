import React from 'react'
import Answer from './Answer'

export default function Answers({ answers, selectionDisabled }) {
  return (
    answers.map((answer) => {
        return <Answer key={crypto.randomUUID()} answers={answers} answer={answer} selectionDisabled={selectionDisabled} />
    })
  )
}
