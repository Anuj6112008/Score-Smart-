
const questions = [
    {q: "What is the solution of x + y = 5 when x = 2?", options: ["(2,3)", "(3,2)", "(5,0)", "(0,5)"], answer: 0},
    {q: "Which of these is a linear equation?", options: ["x² + y = 5", "2x + 3y = 6", "xy = 10", "x/y = 4"], answer: 1},
    {q: "For equation 3x – y = 4, if x = 2, y =?", options: ["6", "2", "3", "8"], answer: 2},
    {q: "What is the x‑intercept of x + 2y = 6?", options: ["(6, 0)", "(0, 6)", "(3, 0)", "(0, 3)"], answer: 0},
    {q: "Write slope of y = 3x + 2.", options: ["2", "3", "–3", "1"], answer: 1},
    {q: "Which point lies on 2x + 3y = 12?", options: ["(3,2)", "(2,3)", "(1,4)", "(4,1)"], answer: 1},
    {q: "Graphically, two linear equations can:", options: ["intersect", "parallel", "coincide", "All above"], answer: 3},
    {q: "Sum of digits is 9, reversed gives +27. Number is?", options: ["18", "54", "45", "36"], answer: 3},
    {q: "Solve: x + y = 7 and x – y = 1. x = ?", options: ["3", "4", "2", "1"], answer: 1},
    {q: "If x = 0 in 4x + 5y = 20 then y =?", options: ["4", "5", "3", "2"], answer: 0},
    {q: "For 2x – 3y = 6, y = ?", options: ["(2x–6)/3", "(2x+6)/3", "(2x–6)/–3", "(6–2x)/3"], answer: 3},
    {q: "Which is not a solution to x + y = 4?", options: ["(1,3)", "(2,2)", "(0,4)", "(4,3)"], answer: 3},
    {q: "Graph of y = –x + 2 is a:", options: ["Constant", "Positive slope", "Negative slope", "Vertical line"], answer: 2},
    {q: "Solve 3x + y = 9 when x = 2. y = ?", options: ["2", "3", "4", "5"], answer: 1},
    {q: "Which is a pair of linear equations?", options: ["x² + y = 5", "2x + y = 4 & x – y = 3", "x³ = y", "None"], answer: 1}
];

const loginForm = document.getElementById("loginForm");
const quizDiv = document.getElementById("quiz");
const questionsDiv = document.getElementById("questions");
const resultDiv = document.getElementById("result");

loginForm.onsubmit = (e) => {
    e.preventDefault();
    loginForm.style.display = "none";
    quizDiv.style.display = "block";

    questions.forEach((item, index) => {
        const qElem = document.createElement("div");
        qElem.innerHTML = `<p><b>Q${index+1}. ${item.q}</b></p>`;
        item.options.forEach((opt, i) => {
            qElem.innerHTML += `<label><input type="radio" name="q${index}" value="${i}"> ${opt}</label><br>`;
        });
        questionsDiv.appendChild(qElem);
    });
};

function submitQuiz() {
    let score = 0;
    questions.forEach((item, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === item.answer) score++;
    });
    quizDiv.style.display = "none";
    resultDiv.style.display = "block";
    resultDiv.innerHTML = `<h3>You scored ${score} out of ${questions.length}.</h3>`;
}
