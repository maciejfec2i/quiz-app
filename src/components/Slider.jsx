import React from 'react'

export default function Slider({ numOfQuestions, setNumOfQuestions }) {
  return (
    <>
      <label htmlFor="slider">Questions: {numOfQuestions}</label>
      <input type="range" name="slider" className="slider" min={5} max={30} step={5} value={numOfQuestions} onChange={(e) => setNumOfQuestions(e.target.value)} />
    </>
  )
}
