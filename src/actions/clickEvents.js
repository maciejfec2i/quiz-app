import wait from "./wait"

function answerSelection({answerRef, selectedAnswer}) {
    const selectedAnswerClass = "selected-answer"

    if(answerRef.current.classList.contains(selectedAnswerClass)) return 
    
    if(selectedAnswer.current !== null && selectedAnswer.current !== answerRef.current) {
        selectedAnswer.current.classList.toggle("selected-answer")
    }
    answerRef.current.classList.toggle("selected-answer")
    selectedAnswer.current = answerRef.current
}

function startGame({selectedDifficulty, setDifficulty, setCurrentQuestionIndex}) {
    if(selectedDifficulty.current === null) return
    setDifficulty(selectedDifficulty.current.textContent)
    setCurrentQuestionIndex(0)
}

async function submitAnswer({selectedAnswer, correctAnswer, allAnswerElRefs, currentQuestionIndex, setCurrentQuestionIndex, startGameBtnRef, setDifficulty,setQuestions, numOfQuestions}) {
    if(selectedAnswer.current == null) return

    startGameBtnRef.current.disabled = true

    if(selectedAnswer.current.textContent === correctAnswer) selectedAnswer.current.classList.toggle("correct-answer")
    else {
        selectedAnswer.current.classList.toggle("incorrect-answer")

        allAnswerElRefs.current.forEach((el) => {
            if(el.textContent === correctAnswer) el.classList.toggle("correct-answer")
        })
    }

    await wait()

    if(currentQuestionIndex + 1 > numOfQuestions - 1) {
        resetGame({setDifficulty, setQuestions})
    }
    else setCurrentQuestionIndex(currentQuestionIndex + 1)
    selectedAnswer.current = null
    startGameBtnRef.current.disabled = false
}

function resetGame({setDifficulty, setQuestions}) {
    setDifficulty(null)
    setQuestions([])
}

const funcs = {
    answerSelection,
    startGame,
    submitAnswer,
    resetGame
}

export default funcs