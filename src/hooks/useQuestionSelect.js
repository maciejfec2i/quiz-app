import { useEffect, useState } from "react";
import arrayShuffle from "array-shuffle";

export default function useQuestionSelect({questions, currentQuestionIndex}) {
    
    const [currentQuestion, setCurrentQuestion] = useState({
        question: "", 
        category: "",
        correctAnswer: ""
    })
    const [allAnswers, setAllAnswers] = useState([])

    useEffect(() => {

        const question = questions[currentQuestionIndex]?.question
        const category = questions[currentQuestionIndex]?.category
        const correctAnswer = questions[currentQuestionIndex]?.correctAnswer
        const incorrectAnswers = questions[currentQuestionIndex]?.incorrectAnswers
        let answers = incorrectAnswers && incorrectAnswers.length > 0 ? arrayShuffle([correctAnswer, ...incorrectAnswers]) : []

        answers = answers.map(answer => {
            return {value: answer, selected: false, correct: undefined}
        })
        
        setCurrentQuestion({
            question,
            category,
            correctAnswer
        })
        setAllAnswers([...answers])
    }, [questions, currentQuestionIndex])

    return [currentQuestion, allAnswers, setAllAnswers]
}