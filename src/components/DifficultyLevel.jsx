import React, { useContext, useRef } from 'react'
import { Context } from '../context/context'
import clickEvents from '../actions/clickEvents'

export default function DifficultyLevel({ difficultyLevel, selected, difficultyLevels }) {

  const difficultyRef = useRef() 
  const setDifficultyLevels = useContext(Context)

  return (
    <div className={"answer no-text-select" + (difficultyLevel.selected ? " selected-answer" : "")} ref={difficultyRef} onClick={() => clickEvents.select({listOfItems: difficultyLevels, setSelected: setDifficultyLevels, itemRef: difficultyRef})}>{difficultyLevel.value}</div>
  )
}
