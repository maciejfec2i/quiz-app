import React from 'react'
import Answer from './Answer'

export default function Answers({ answers, allAnswerElRefs }) {
  return (
    answers.map((answer, index) => {
        return <Answer key={crypto.randomUUID()} answer={answer} allAnswerElRefs={allAnswerElRefs} index={index} />
    })
  )
}
