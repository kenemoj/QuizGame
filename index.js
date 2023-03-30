const startButton = document.getElementById('start-btn')

const questionContainer = document.getElementById('question-container')

let shuffledQuestions, currentQuestion

const questionElement = document.getElementById('question')

const answerButtonsElement = document.getElementById('answer-buttons')

startButton.addEventListener('click', startGame)

function startGame(){
    console.log('Game started')
    startButton.classList.add('hide')
    questionContainer.classList.remove('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestion = 0
    nextQuestion()
}

function nextQuestion(){
    console.log('Moved to next question')
    showQuestion(shuffledQuestions[currentQuestion])

}

function showQuestion(question){
    questionElement.innerText = question.question
    questions.answers.forEach()
}

function pickAnswer(){
    console.log('Selected an answer')
}

const questions = [
    {
        question: 'What is the capital of the US?',
        answers: [
            {test: 'DC', correct: true},
            {test: 'Kansas', correct: false},
            {test: "Hawai'i'", correct: false},
            {test: 'New York', correct: false}
        ]
    }
]