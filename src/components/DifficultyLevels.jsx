import { useRef } from 'react'
import DifficultyLevel from './DifficultyLevel'

export default function DifficultyLevels({ difficultyLevels }) {

  return (
    difficultyLevels.map((difficultyLevel) => {
        return <DifficultyLevel difficultyLevel={difficultyLevel.level} selected={difficultyLevel.selected} difficultyLevels={difficultyLevels} key={crypto.randomUUID()} />
    })
  )
}
