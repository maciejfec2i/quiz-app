import { v4 as uuidv4 } from 'uuid'

export default function AnswersWire() {
  const frames = [0, 0, 0, 0]  

  return (
    frames.map(() => {
        return <div className="answer mock-answer no-text-select" key={uuidv4()}>AnswersWire</div>
    })
  )
}
