import React, { useContext, useRef } from 'react'
import { Context } from '../context/context'
import clickEvents from '../actions/clickEvents'

export default function DifficultyLevel({ difficultyLevel }) {

  const difficultyRef = useRef() 
  const context = useContext(Context)
  const difficultyLevels = context.difficultyLevels
  const setDifficultyLevels = context.setDifficultyLevels

  return (
    <div className={"answer no-text-select" + (difficultyLevel.selected ? " selected-answer" : "")} ref={difficultyRef} onClick={() => clickEvents.select({listOfItems: difficultyLevels, setSelected: setDifficultyLevels, itemRef: difficultyRef})}>{difficultyLevel.value}</div>
  )
}
