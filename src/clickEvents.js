export default function answerSelection({answerRef, selectedAnswer}) {
    const selectedAnswerClass = "selected-answer"

    if(answerRef.current.classList.contains(selectedAnswerClass)) return 
    
    if(selectedAnswer.current !== null && selectedAnswer.current !== answerRef.current) {
        selectedAnswer.current.classList.toggle("selected-answer")
    } 
    answerRef.current.classList.toggle("selected-answer")
    selectedAnswer.current = answerRef.current
}