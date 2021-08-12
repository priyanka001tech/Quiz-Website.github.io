const quizData = [
    {
        question: "Who was the author of the famous storybook 'Alice's Adventures in Wonderland'?",
        a: "Rudyard Kipling",
        b: "Lewis Carroll",
        c: "John Keats",
        d: "H G Wells",
        correct: "b",
    },
    {
        question: " Who wrote 'Where ignorance is bliss, it is folly to be wise'?",
        a: "Browning",
        b: "Shakespeare",
        c: "Marx",
        d: "Kipling",
        correct: "b",
    },
    {
        question: " Which is the first Harry Potter book?",
        a: "HP and the Goblet of Fire",
        b: "HP and the Philosopher’s Stone",
        c: "HP and the Chamber of Secrets",
        d: "HP and the God of small Things",
        correct: "b",
    },
    {
        question: "'Jane Eyre' was written by which Bronte sister",
        a: "Charlotte",
        b: "Anne",
        c: " Emily",
        d: "None of the Above",
        correct: "a",
    },
    {
        question: "In the book ‘the Lord of the Rings ‘, who or what is Bilbo?",
        a: "Dwarf",
        b: "Wizard",
        c: "Hobbit",
        d: "Troll",
        correct: "c",
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