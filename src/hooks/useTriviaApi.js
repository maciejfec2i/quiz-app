import { useState, useEffect } from "react"
import axios from "axios"

export default function useTriviaApi({difficulty, difficultyLevels}) {
    const url = `https://the-trivia-api.com/api/questions?limit=10&difficulty=${difficulty}`
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        async function getQuestions() {
            try {
                if(difficultyLevels.includes(difficulty)) {
                    const response = await axios.get(url)
                    setQuestions([...response.data])
                }
            }
            catch {
        
            }
        }

        getQuestions()
    }, [difficulty])

    console.log(questions)
    return [questions, setQuestions]
}