import React, { useContext } from 'react'
import { Context } from '../context/context'
import Answer from './Answer'
import { v4 as uuidv4 } from 'uuid'

export default function Answers() {

  const context = useContext(Context)
  const answers = context.allAnswers

  return (
    answers.map((answer) => {
        return <Answer key={uuidv4()} answer={answer} />
    })
  )
}
