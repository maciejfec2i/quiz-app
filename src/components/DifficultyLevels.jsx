import { useRef } from 'react'
import DifficultyLevel from './DifficultyLevel'

export default function DifficultyLevels({ difficultyLevels, difficultyRef }) {

  return (
    difficultyLevels.map((difficultyLevel) => {
        return <DifficultyLevel difficultyLevel={difficultyLevel} key={crypto.randomUUID()} />
    })
  )
}