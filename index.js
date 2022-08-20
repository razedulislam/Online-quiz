const quizeDB= [
{
question: "Q1: What is your name?",
a: "Razedul Islam",
b: "Munna Kumar",
c: "Shagor Hossain",
d: "Imran Hossain",
ans:"ans1"
},

{
question: "Q2: Where do you live?",
a: "Dhaka",
b: "Khulna",
c: "Rajshahi",
d: "Sylhet",
ans:"ans2"
},
    {
question: "Q3: What is your favourite subject?",
a: "Bangla",
b: "English",
c: "ICT",
d: "Math",
ans:"ans3"
},
{
question: "Q4: What is your profession?",
a: "Engineer",
b: "Businessman",
c: "Softwareengineer",
d: "Web developer",
ans:"ans4"
}
];
const question= document.querySelector('.question');
const option1= document.querySelector('#option1');
const option2= document.querySelector('#option2');
const option3= document.querySelector('#option3');
const option4= document.querySelector('#option4');
const submit= document.querySelector('#submit');

const showScore= document.querySelector('#showScore');


const answers= document.querySelectorAll('.answer');
let questionCount  = 0;
let quizTime = 0;
let score = 0;

//timer
/*
var timer;
var ele = document.getElementById('timer');

function AutoRefresh( t ) {
    setTimeout("location.reload(true);", t);
 }

 
(function (){
  var sec = 0;
  timer = setInterval(()=>{
    if(sec<=15){
    ele.innerHTML = '00:'+sec;
    sec ++;
    }
  }, 1000) // each 1 second
})() 

function pause(){
  clearInterval(timer);
}
*/

/*var sec = 60;
var time = setInterval(myTimer, 1000);

function myTimer() {
    document.getElementById('timer').innerHTML = sec + "sec left";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("Time out!! :(");
    }
}
*/

let time =1;
let quizTimeMin = time * 60 *60;
quizTime = quizTimeMin / 60;

let counting = document.getElementById("count-down");



function showScores(){
    showScore.innerHTML= `
    <h3>Your Score ${score}/${quizeDB.length} </h3>
    <button class="btn" onclick="location.reload()"> Play Again</button>
    `;

    showScore.classList.remove('scoreaArea');
}

function startCountdown(){
let quizTimer = setInterval(function(){
    if(quizTime <= 0){
        clearInterval(quizTimer);
        showScores();
    }
    else{
        quizTime-- ;
        let sec = Math.floor(quizTime % 60);
        let min =Math.floor(quizTime / 60) % 60;
        counting.innerHTML = `Time : ${min} : ${sec}`;
    }
     
}, 1000)

}
startCountdown();


const loadQuestion=() => {

    const questionList=quizeDB[questionCount];
  
    question.innerHTML = questionList.question ;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;

}



loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((currentAnswer) => {
if(currentAnswer.checked){
    answer = currentAnswer.id;
}

    });

    return answer;

};

const deselectAll = () => {

    answers.forEach((currentAnswer) => currentAnswer.checked=false);
}


submit.addEventListener('click',() => {
    const CheckedAnswer= getCheckAnswer();
    console.log(CheckedAnswer);
    if(CheckedAnswer==quizeDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();




    if(questionCount< quizeDB.length){
        loadQuestion();
    }

    

    else{

        showScores()
      
        
    }
});



