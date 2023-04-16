import wait from "./wait"

function select({listOfItems, setSelected, itemRef, selectionDisabled}) {
    
    if(selectionDisabled?.current) return

    listOfItems.forEach((item) => {
        if(item.value === itemRef.current.textContent) item.selected = true
        else item.selected = false

        setSelected([...listOfItems])
    })
}

function startGame({difficultyLevels, setDifficulty, setCurrentQuestionIndex}) {
    
    difficultyLevels.forEach(level => {
        if(level.selected) {
            setDifficulty(level.value)
            setCurrentQuestionIndex(0)
        }
    })
}

async function submitAnswer({allAnswers, setAllAnswers, correctAnswer, currentQuestionIndex, setCurrentQuestionIndex, selectionDisabled, setDifficulty,setQuestions, numOfQuestions}) {

    allAnswers.forEach(async (answer) => {
        if(answer.selected) {
            selectionDisabled.current = true
            
            if(answer.value === correctAnswer) answer.correct = true
            else {
                answer.correct = false
                allAnswers.forEach((answ) => {
                    if(answ.value === correctAnswer) answ.correct = true
                })
            }

            setAllAnswers([...allAnswers])

            await wait()

            if(currentQuestionIndex + 1 > numOfQuestions - 1) {
                resetGame({setDifficulty, setQuestions})
            }
            else setCurrentQuestionIndex(currentQuestionIndex + 1)

            selectionDisabled.current = false
        }
    })
}

function resetGame({setDifficulty, setQuestions}) {
    setDifficulty(null)
    setQuestions([])
}

const funcs = {
    select,
    startGame,
    submitAnswer,
    resetGame
}

export default funcs