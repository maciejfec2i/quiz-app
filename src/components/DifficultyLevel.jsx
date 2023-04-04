import React, { useContext, useRef } from 'react'
import { Context } from './Quiz'
import clickEvents from '../actions/clickEvents'

export default function DifficultyLevel({ difficultyLevel, selected, difficultyLevels }) {

  const difficultyRef = useRef() 
  const setDifficultyLevels = useContext(Context)

  return (
    <div className={"answer no-text-select" + (selected ? " selected-answer" : "")} ref={difficultyRef} onClick={() => clickEvents.difficultySelection({difficultyLevels, setDifficultyLevels, difficultyRef})}>{difficultyLevel}</div>
  )
}
