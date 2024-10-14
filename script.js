const quizData = [
  {
    question: "what does html stand for ?",
    opt: [
      "hypertext markup language",
      "hyper transfer markup language",
      "hypertext machine language",
      "hyperline and text markup language",
    ],
    correct: 0,
  },
  {
    question:
      "which css property is used to control the spacing between elements",
    opt: ["margin", "padding", "spacing", "border-spacing"],
    correct: 1,
  },
  {
    question:
      "what is the js function used to select an HTML element by its id ?",
    opt: [
      "document.query",
      "getElementById",
      "selectElement",
      "findElementById",
    ],
    correct: 1,
  },
  {
    question:
      "In react.js which hook is used to perform side effects in a function component?",
    opt: ["useEffect", "useState", "useContext", "useReducer"],
    correct: 0,
  },
  {
    question: "which HTML tag is used to create an ordered list?",
    opt: ["ul", "li", "ol", "dl"],
    correct: 2,
  },
];
const quiz = document.querySelector(".quiz")
const answerElm = document.querySelectorAll(".ans");
const questionElm = document.querySelector(".ques");
const [opt_1, opt_2, opt_3, opt_4] = document.querySelectorAll(
  "#opt_1, #opt_2, #opt_3, #opt_4"
);
const submit = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
  const { question, opt } = quizData[currentQuiz];

  // console.log(opt);

  questionElm.innerHTML = quizData[currentQuiz].question;
  opt.forEach(
    (currOpt, index) => (window[`opt_${index + 1}`].innerHTML = currOpt)
  );
}

function getSelectedOption() {
  let answerElement = Array.from(answerElm);
  return answerElement.findIndex((curElm) => curElm.checked);
}
function deselectedAnswers() {
  answerElm.forEach((curElm) => (curElm.checked = false));
}
submit.addEventListener("click", () => {
  const selectedOptionIndex = getSelectedOption();

  // console.log(selectedOptionIndex);
  if (selectedOptionIndex === quizData[currentQuiz].correct) {
    score = score + 1;
  }
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    deselectedAnswers();
    loadQuiz();
  }else{
    quiz.innerHTML=`<div class="reult">
        <h2 class="score"> your score:${score}/${quizData.length} Correct Answers</h2>
        <p>   Congratulation on completing the quiz! </p>
        <button class="reload" onclick="location.reload()">play again</button>
      </div>`
  }
});
loadQuiz();
