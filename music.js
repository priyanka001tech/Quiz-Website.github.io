const quizData = [
    {
        question: "What singer has had a Billboard No. 1 hit in each of the last four decades?",
        a: "Farrokh Bulsara",
        b: "Brie Larson",
        c: "Kesha",
        d: " Mariah Carey",
        correct: "d",
    },
    {
        question: "What was Madonna‘s first top 10 hit?",
        a: "Rob Zombie",
        b: "Holiday",
        c: "Cops and Robbers",
        d: "Detroit",
        correct: "b",
    },
    {
        question: "What singer is known as 'The Vocal Bible'?",
        a: "Brandy",
        b: "Lara",
        c: "Omnicava",
        d: "Isris",
        correct: "a",
    },
    {
        question: "Prince introduced his iconic symbol on the cover of which single?",
        a: "1996",
        b: "1999",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: " Before Bleachers and fun, Jack Antonoff fronted what band?",
        a: "Steel Train",
        b: "Steel Tram",
        c: "Opera",
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
