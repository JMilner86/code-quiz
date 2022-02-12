// Step 1, code the timer
// Step 2, code the questions
//Step 3, code the leader board

let beginQuiz = document.querySelector('#start-quiz');
let mainEl = document.getElementById('main');
let welcomeEl = document.getElementById('welcome');
let timerText = document.getElementById('timer-display');

let questionEl = document.createElement('h2');
let choices = document.createElement('ul');
let a = document.createElement('li');
a.setAttribute('id', 'a');
let b = document.createElement('li');
b.setAttribute('id', 'b');
let c = document.createElement('id','c');
c.setAttribute('id', 'c');
let d = document.createElement('li');
d.setAttribute('id', 'd');

let correctAns = true




let seconds = 60;

// My timer function, is 60 seconds too short? 
let timer = function() {
    let countdown = setInterval(function () {
        if (seconds > 0) {
            seconds --;
            timerText.textContent = seconds;
        }

        else {
           clearInterval(countdown); 
        };
    }, 1000)
};


// Display the quiz questions

    const displayQuests = () => {
        if (seconds > 0) {
            welcomeEl.textContent = quizQuestions[0]
        }
    }







// All of the quiz questions, not about JS. 
const quizQuestions = [

    question1 = 
    {
         question: `On which of the following albums did the song "Houses Of The Holy" appear?`,
         a: `Houses Of The Holy`,
         b: `Physical Graffiti`,
         c: `Led Zeppelin IV`,
         d: `Presence`,
         correctAns: `b`
    },

    question2 = 
    {
        question: `What color was the umbrella in the song "Living Loving Maid"?`,
        a: `Blue`,
        b: `Red`,
        c: `Purple`,
        d: `Green`,
        correctAns: `c`
    },

    question3 = 
    {
        question: `Where was Robert Plant going, with his "rider" by his side?`,
        a: `Rosedale`,
        b: `Mordor`,
        c: `London`,
        d: `California`,
        correctAns: `a`
    },

    question4 = 
    {
        question:`By how much money has the price you pay to nowhere increased?`,
        a: `Ten dollars more`,
        b: `Five dollars more`,
        c: `Eight dollars more`,
        d: `A dollar more`,
        correctAns: `d`
    },

    question5 = 
    {
        question: `Supposedly, Robert and "Rosie" have another child on the way, how many will they have then?`,
        a: `10`,
        b: `11`,
        c: `9`,
        d: `12`,
        correctAns: `b`
    },
        
    question6 = 
    {
        question: `How many Led Zeppelin songs are named after foods?`,
        a: `6`,
        b: `8`,
        c: `7`,
        d: `10`,
        correctAns: `a`
    },

    question7 = 
    {
        question: `What is the longest song released on Led Zeppelin's studio albums?`,
        a: `Carouselambra`,
        b: `Tea for One`,
        c: `Achilles Last Stand`,
        d: `In My Time of Dying`,
        correctAns: `d`
    },

    question8 = 
    {
        question: `What can you hide from Tom?`,
        a: `Anything`,
        b: `Money`,
        c: `Nothing`,
        d: `Your emotions`,
        correctAns: `c`
    },

    question9 = 
    {
        question: `Who did Robert meet in Mordor?`,
        a: `Gollum`,
        b: `The Evil One`,
        c: `Jimmy`,
        d: `A girl so fair`,
        correctAns: `d`
    },

    question10 = 
    {
        question: `Why is Robert a fool in the rain?`,
        a: `'Cause he loves her, and she don't want him no more`,
        b: `He's standing on the wrong block`,
        c: `He wanted a woman, never bargained for her`,
        d: `The Levee is going to break`,
        correctAns: `b`
    }

];

// Game over functions












// Trying to get the click to work
beginQuiz.addEventListener('click', timer);
beginQuiz.addEventListener('click', displayQuests);

