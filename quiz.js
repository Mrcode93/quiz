let quizData = [{
        question: "Q1: What is the front end language ?",
        a: "Html",
        b: "CSS",
        c: "JavaScript",
        d: "C++",
        correct: "c",
    },
    {
        question: "Q2: What is the back end language ?",
        a: "PHP",
        b: "CSS",
        c: "C++",
        d: "JavaScript",
        correct: "a",
    },
    {
        question: "Q3: What is the database language ?",
        a: "PHP",
        b: "C#",
        c: "C++",
        d: "SQL",
        correct: "d",
    },
    {
        question: "Q4: What is the front end framework ?",
        a: "React",
        b: "React Native",
        c: "Angular",
        d: "Bootstrap",
        correct: "a",
    },
];

const quiz = document.querySelector("#quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.querySelector("#question");
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");
const submitButton = document.querySelector("#submit");
let span = document.querySelectorAll("span");
let currentQuiz = 0;
let score = 0;

const deseletAnswer = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
};
// quizData[currentQuiz].question = questionElement.innerText;

const loadQuiz = () => {
    deseletAnswer();
    questionElement.innerText = quizData[currentQuiz].question;
    a_text.innerText = quizData[currentQuiz].a;
    b_text.innerText = quizData[currentQuiz].b;
    c_text.innerText = quizData[currentQuiz].c;
    d_text.innerText = quizData[currentQuiz].d;
};
loadQuiz();
submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        console.log(answer);
        if (answer === quizData[currentQuiz].correct) score++;

        currentQuiz++;
        if (currentQuiz < quizData.length) loadQuiz();
        else {
            quiz.innerHTML = `<h2> You answered ${score}/ ${quizData.length} questions correctly</h2>
            <button onclick="history.go(0)">Play Again</button>`;
        }
    }
    span.forEach((e, i) => {
        if (currentQuiz === i) {
            e.classList.add("active");
            if (currentQuiz === i - 1) {
                e.classList.remove("active");
            }
        }
    });
});