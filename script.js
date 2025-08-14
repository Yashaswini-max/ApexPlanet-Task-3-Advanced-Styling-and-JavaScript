// ===== QUIZ SECTION =====
const questions = [
  {
    question: "What is the correct syntax for a function in JavaScript?",
    options: ["function myFunc()", "def myFunc()", "func myFunc()"],
    answer: "function myFunc()"
  },
  {
    question: "Which of the following is a JavaScript data type?",
    options: ["Integer", "Float", "Boolean"],
    answer: "Boolean"
  },
  {
    question: "How do you write a comment in JavaScript?",
    options: ["<!-- comment -->", "// comment", "# comment"],
    answer: "// comment"
  },
  {
    question: "What keyword is used to declare a constant variable?",
    options: ["let", "var", "const"],
    answer: "const"
  },
  {
    question: "Which method is used to convert JSON to a JS object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()"],
    answer: "JSON.parse()"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreDisplay = document.getElementById("scoreDisplay");

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsEl.appendChild(btn);
  });

  nextBtn.style.display = "none";
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  if (selected === correct) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    questionEl.textContent = "Quiz Finished!";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    scoreDisplay.textContent = `Score: ${score} / ${questions.length}`;
  }
}

nextBtn.addEventListener("click", () => {
  showQuestion();
});

showQuestion();

// ===== JOKE SECTION =====
const jokeBtn = document.getElementById("jokeBtn");
const jokeDisplay = document.getElementById("jokeDisplay");

jokeBtn.addEventListener("click", async () => {
  jokeDisplay.textContent = "Loading a joke...";
  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();
    jokeDisplay.textContent = `${data.setup} — ${data.punchline}`;
  } catch (error) {
    jokeDisplay.textContent = "Oops! Couldn't load a joke. Try again.";
  }
});
