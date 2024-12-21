import React, { useContext, useRef } from 'react'
import { Context } from '../context/context'
import DifficultyLevel from './DifficultyLevel'
import { v4 as uuidv4 } from 'uuid'

export default function DifficultyLevels() {

  const context = useContext(Context)
  const difficultyLevels = context.difficultyLevels

  return (
    difficultyLevels.map((difficultyLevel) => {
        return <DifficultyLevel difficultyLevel={difficultyLevel} key={uuidv4()} />
    })
  )
}
