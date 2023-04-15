import { useState, useEffect } from "react"
import axios from "axios"

export default function useTriviaApi({numOfQuestions, difficulty, listOfLevels}) {
    const url = `https://the-trivia-api.com/api/questions?limit=${numOfQuestions}&difficulty=${difficulty}`
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        async function getQuestions() {
            try {
                if(listOfLevels.includes(difficulty)) {
                    const response = await axios.get(url)
                    setQuestions([...response.data])
                }
            }
            catch {}
        }

        getQuestions()
    }, [difficulty])

    return [questions, setQuestions]
}