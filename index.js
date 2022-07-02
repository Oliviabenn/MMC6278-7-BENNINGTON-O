// Create a quiz game that asks the user timed questions:

//Show first question text, choices, and remaining time of 10 when start is clicked

//Count down 30 seconds at a time

//Show the next question and reset the timer when a correct option is chosen
//show the next question and reset the timer when an incorrect option is chosen

//end game when timer runs out on last question

//show score when game is over and start quiz button

//store score in localStorage under the key "previous-score"

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

//score
var score = 0;
let counter= 0;
let timeLeft= 30;

//begin quiz on button click
var quizContainer = document.getElementById('quiz');
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

 startButton.addEventListener("click", runQuiz);

 const timerCont= document.getElementById("timer");

function runQuiz(){

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


  //loop
//
// for(var i=0; i < questionsArr.length; i++){
//   var response = confirm(questionsArr[i].question);
//   if(response == questionsArr[i].answer){
//     score= score + (100 / questionsArr.length);
//   }
// }
 }

//countdown 30 secs
// var timeLeft = 30;



//     function countdown() {
//       if (timeLeft == -1) {
//         clearTimeout(timerId);
//       //  doSomething();
//       } else {
//         quizContainer.innerHTML = timeLeft + ' seconds';
//         timeLeft--;
//       }
//   }
