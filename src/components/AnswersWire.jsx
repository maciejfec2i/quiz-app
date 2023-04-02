export default function AnswersWire() {
  const frames = [0, 0, 0, 0]  

  return (
    frames.map(() => {
        return <div className="answer mock-answer no-text-select" key={crypto.randomUUID()}>AnswersWire</div>
    })
  )
}
