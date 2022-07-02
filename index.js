// Create a quiz game that asks the user timed questions:

//Show first question text, choices, and remaining time of 10 when start is clicked

//Count down 30 seconds at a time

//Show the next question and reset the timer when a correct option is chosen
//show the next question and reset the timer when an incorrect option is chosen

//end game when timer runs out on last question

//show score when game is over and start quiz button

//store score in localStorage under the key "previous-score"

//Array of question and answers
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

// //score
// var score = 0;
//
// //begin quiz on button click
function runQuiz(){
//
//   //loop
// for(var i=0; i < questionsArr.length; i++){
//   var response = confirm(questionsArr[i].question);
//   if(response == questionsArr[i].answer){
//     score= score + (100 / questionsArr.length);
//   }
// }
// }

//countdown 30 secs
var timeLeft = 30;
    var elem = document.getElementById('quiz');

    var timerId = setInterval(countdown, 1000);

    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
      } else {
        elem.innerHTML = timeLeft + ' seconds';
        timeLeft--;
      }
    }
