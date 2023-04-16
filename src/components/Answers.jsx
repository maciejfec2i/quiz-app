import React, { useContext } from 'react'
import { Context } from '../context/context'
import Answer from './Answer'

export default function Answers() {

  const context = useContext(Context)
  const answers = context.allAnswers

  return (
    answers.map((answer) => {
        return <Answer key={crypto.randomUUID()} answer={answer} />
    })
  )
}
