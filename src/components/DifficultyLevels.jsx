import React, { useContext, useRef } from 'react'
import { Context } from '../context/context'
import DifficultyLevel from './DifficultyLevel'
import("crypto")

export default function DifficultyLevels() {

  const context = useContext(Context)
  const difficultyLevels = context.difficultyLevels

  return (
    difficultyLevels.map((difficultyLevel) => {
        return <DifficultyLevel difficultyLevel={difficultyLevel} key={crypto.randomUUID()} />
    })
  )
}
