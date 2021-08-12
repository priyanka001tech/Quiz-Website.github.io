const quizData = [
    {
        question: "The ratio of width of our National flag to its length is?",
        a: "3:5",
        b: "2:3",
        c: "2:4",
        d: "3:4",
        correct: "b",
    },
    {
        question: "'Dandia' is a popular dance of?",
        a: "Punjab",
        b: "Gujarat",
        c: "Tamil Nadu",
        d: "Maharastra",
        correct: "b",
    },
    {
        question: " Which Indian state celebrates Bihu as a folk dance?",
        a: "Meghalaya",
        b: "Manipur",
        c: "Bihar",
        d: "Assam",
        correct: "d",
    },
    {
        question: "Rabindranath Tagore's 'Jana Gana Mana' has been adopted as India's National Anthem. How many stanzas of the said song were adopted",
        a: "Only the first stanza",
        b: "The whole song",
        c: "Third and Fourth stanza",
        d: "First and Second stanza",
        correct: "a",
    },
    {
        question: "Indian classical dance forms are based on the instructions of which book?",
        a: "Natya Shastra",
        b: "Natya Katha",
        c: "Natya Kala",
        d: "none of the above",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <a href="index.html"><button onclick="location.reload()">Reload</button></a>
            `
        }
    }
})
