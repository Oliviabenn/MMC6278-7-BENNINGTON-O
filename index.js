//Array of question and answers
const startBtn= document.getElementById("start-quiz");

var questionsArr = [
  {
    question: 'Who created JavaScript?',
    answer: 'Brendan Eich',
    options: [
      'Linus Torvalds',
      'Brendan Eich',
      'Dan Abramov',
      'Douglas Crockford',
    ]
  },
//2
  {
    question: 'What year was JavaScript created?',
    answer: '1995',
    options: [
      '1995',
      '2002',
      '1990',
      '2015',
    ]
  },
  //3
  {
    question: 'How long did Brendan Eich take to write the JavaScript programming language?',
    answer: '10 days',
    options: [
      '10 years',
      '10 minutes',
      '10 days',
      '10 hours',
    ]
  },
  //4
  {
    question: 'Is JavaScript a front-end, back-end, or full-stack programming language?',
    answer: 'Full-stack',
    options: [
      'Full-stack',
      'Front-end',
      'Back-end',
      'Web design',
    ]
  },
  //5
  {
    question: 'Which of the following is not a reserved word in JavaScript?',
    answer: 'undefined',
    options: [
      'throw',
      'undefined',
      'finally',
      'default',
    ]
  },
];

// score, timer
var score = 0;
let counter= 0;
let timeLeft= 30;
let previousScore= localStorage.getItem("previous-score");

var quizContainer = document.getElementById('quiz');

//show previous score on complete
const scoreContainer= document.createElement("p");
     if(previousScore !== null){
      scoreContainer.innerHTML= `Previous Score:  ${previousScore}%`;
      quizContainer.appendChild(scoreContainer);
     }

const timerContainer= document.createElement("p");
       timerContainer.setAttribute("id", "timer");
       timerContainer.innerHTML= timeLeft;
       quizContainer.appendChild(timerContainer);
let startButton= document.createElement("button");
        startButton.setAttribute("id", "start-quiz");
        startButton.innerHTML= "Start Quiz";

        quizContainer.appendChild(startButton);
const container= document.createElement("div");
       quizContainer.appendChild(container);

//start button goes away when quiz begins
 startButton.addEventListener("click", ()=> {
  startButton.remove();
  runQuiz();
});

 const timerCont= document.getElementById("timer");

//store previous score + display as percent
function runQuiz(){
  if(questionsArr[counter] === undefined){
    let percentageScore= (score * 100) / questionsArr.length;
    console.log(score);
    localStorage.setItem("previous-score", percentageScore);
    window.location.reload();
  }

//show questions AFTER the quiz is initiated
    const questionHTML= `
      <div class="single-question">
        <p>${questionsArr[counter].question}</p>
        <div>
          <button>${questionsArr[counter].options[0]}</button>
          <button>${questionsArr[counter].options[1]}</button>
          <button>${questionsArr[counter].options[2]}</button>
          <button>${questionsArr[counter].options[3]}</button>
        </div>
        <p>30</p>
      </div>
    `;
    container.innerHTML= "";
   container.insertAdjacentHTML("afterbegin", questionHTML);

   var timerId = setInterval(()=> {
         timeLeft--;
         timerCont.innerHTML= timeLeft;

   }, 1000);

//clear at 0
   if(timeLeft === 0){
    console.log("It is now zero");
    counter++;
    clearInterval(timerId);
    timeLeft= 30;
    runQuiz();
   }

//add to score when correct answer
   let selectButtons= document.querySelectorAll(".single-question button");
      selectButtons.forEach(button=> {
        button.addEventListener("click", ()=> {
          if(button.innerHTML === questionsArr[counter].answer){
            score++;
          }

          counter++;
          clearInterval(timerId);
          timeLeft= 30;
          runQuiz();
        })
      })
 }
