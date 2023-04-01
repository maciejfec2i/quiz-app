import React from 'react'
import Answer from './Answer'

export default function Answers({ answers }) {
  return (
    answers.map((answer) => {
        return <Answer answer={answer} key={crypto.randomUUID()} />
    })
  )
}
