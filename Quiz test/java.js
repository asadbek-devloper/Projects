"use strict ";
const questionContainer = document.querySelector(".question-card");
const questionContainerok = document.querySelector(".question-container");
const correctAnswerNum = document.querySelector(".correct-answer-num");
const wrongAnswerNum = document.querySelector(".wrong-answer-num");
const finished = document.querySelector(".finished");
const finishedNext = document.querySelector(".finished-next");
let questionNext = null;

let correctAnswer = 0;
let wrongAnswer = 0;
let questionContainerWidth = 0;
let questionContainerleng = 0;
let questionContainerChildren = 0;
let options = null;

const questionBox = (questions) => {
  const arr = [];
  let randomIndex = Math.floor(Math.random() * questions.length);
  const randomQuiz = questions[randomIndex];
  console.log(randomQuiz);
  questions.forEach((question, i) => {
    const liEL = ` <li>
       <div class="question-box">
       <div class="num">${i + 1}</div
         <p class="question">
           ${question.question}
         </p>
         <div class="options">
           <button class=" btn ${   
             question.options[1] === question.answer
               ? "correct-answer"
               : "wrong-answer"
           }">${question.options[1]}</button>
           <button class="btn ${
             question.options[2] === question.answer
               ? "correct-answer"
               : "wrong-answer"
           }">${question.options[2]}</button>

         </div>
         <button class="next question-next">next</button>
       </div>
     </li>`;
    questionContainer.insertAdjacentHTML("beforeend", liEL);
  });
  options = document.querySelectorAll(".btn");
  questionContainerChildren = questionContainer.children.length;
  questionNext = document.querySelectorAll(".question-next");
};

const optionsFunc = () => {
  options.forEach((option) => {
    option.addEventListener("click", (e) => {
      questionContainerleng++;

      console.log(questionContainerChildren);
      if (questionContainerChildren > questionContainerleng) {
        questionContainerWidth += 425;
        questionContainer.style.transform = `translateX(${-questionContainerWidth}px)`;
      } else {
        correctAnswerNum.textContent = correctAnswer;
        wrongAnswerNum.textContent = wrongAnswer;
        finished.classList.remove("display-none");
        wrongAnswer = 0;
        correctAnswer = 0;
      }

      if (e.target.classList.contains("correct-answer")) {
        correctAnswer++;
      }
      if (e.target.classList.contains("wrong-answer")) {
        wrongAnswer++;
      }
    });
  });
};

const questionNextFunc = () => {
  questionNext.forEach((next) => {
    next.addEventListener("click", () => {
      wrongAnswer++;
      questionContainerleng++;
      if (questionContainerChildren > questionContainerleng) {
        questionContainerWidth += 425;
        questionContainer.style.transform = `translateX(${-questionContainerWidth}px)`;
      } else {
        correctAnswerNum.textContent = correctAnswer;
        wrongAnswerNum.textContent = wrongAnswer;
        finished.classList.remove("display-none");
        wrongAnswer = 0;
        correctAnswer = 0;
      }
    });
  });
};
const getData = (resourse) => {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.addEventListener("readystatechange", () => {
      if (req.readyState === 4) {
        if (req.status.toString()[0] === "2") {
          resolve(JSON.parse(req.response));
        } else {
          reject(Xatolik);
        }
      }
    });
    req.open(resourse.method, resourse.path);
    req.send();
  });
};
const tbody = document.querySelector("tbody");

getData({
  method: "GET",
  path: "quiz.json",
})
  .then((data) => {
    const questions = data;
    questionBox(questions);
    optionsFunc();
    questionNextFunc();
  })
  .catch((err) => {
    console.log(err);
  });

finishedNext.addEventListener("click", () => {
  finished.classList.add("display-none");
  wrongAnswer = 0;
  correctAnswer = 0;
  questionContainerleng = 0;
  questionContainerWidth = 0;
  questionContainer.style.transform = `translateX(${-questionContainerWidth}px)`;
});
