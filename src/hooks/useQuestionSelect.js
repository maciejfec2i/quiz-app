import { useEffect, useRef, useState } from "react";
import arrayShuffle from "array-shuffle";

export default function useQuestionSelect({questions, currentQuestionIndex}) {
    const [question, setQuestion] = useState("")
    const [category, setCategory] = useState("")
    const correctAnswer = useRef("")
    const incorrectAnswers = useRef([])
    const allAnswers = useRef([])

    useEffect(() => {
        setQuestion(questions[currentQuestionIndex]?.question)
        setCategory(questions[currentQuestionIndex]?.category)
        correctAnswer.current = questions[currentQuestionIndex]?.correctAnswer
        incorrectAnswers.current = questions[currentQuestionIndex]?.incorrectAnswers
        if(incorrectAnswers.current?.length > 0) allAnswers.current = arrayShuffle([correctAnswer.current, ...incorrectAnswers.current])

    }, [questions, currentQuestionIndex])

    return [question, category, correctAnswer.current, allAnswers.current]
}