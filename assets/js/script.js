let score = 0
let questions = undefined
let userAnswers = []
let count = 0 //count for array of questions
let userChoice = 10
let question = document.querySelector("#currentQuestion")
let options = document.querySelector("#options")



const grabData = async(event) => {
    event.preventDefault()
    count = 0
    options.innerHTML = ""
    let category = parseInt(document.querySelector("#category").value)
    let difficulty = document.querySelector("#difficulty").value
    let userChoice = parseInt(document.querySelector("#numOfQuestions").value)
        //fetch data
    let response = await fetch(`https://opentdb.com/api.php?amount=${userChoice}&category=${category}&difficulty=${difficulty}`)
    let data = await response.json()
    questions = data["results"]
    generateAndFilQuestionAnswerElements()
}

const generateAndFilQuestionAnswerElements = function() {
    question.innerHTML = questions[count].question
    let answers = questions[count].incorrect_answers
    answers.push(questions[count].correct_answer)

    for (const answer of answers) {
        let button = document.createElement("button")
        button.innerText = answer
        button.addEventListener("click", (event) => { validateAnswer(event, count) })
        options.appendChild(button)

    }

}


const validateAnswer = (event) => {
    if (event.target.innerText === questions[count].correct_answer) {
        score += 1
        event.target.style.backgroundColor = "green"
    } else {
        event.target.style.backgroundColor = "red"
    }
    setTimeout(() => {
        if (count < questions.length) {
            options.innerHTML = ""
            generateAndFilQuestionAnswerElements()

        } else {
            options.innerHTML = ""
            question.innerText = `Your Score is ${score}`
        }
    }, 422)
    count++

}