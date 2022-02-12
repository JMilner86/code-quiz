// Step 1, code the timer
// Step 2, code the questions
//Step 3, code the leader board

let beginQuiz = document.querySelector("#start-quiz");
let timerDisplay = document.createElement("p")


const timer = () => {
    timerDisplay.textContent("60")
}

beginQuiz.addEventListener("click", timer(60));


const quizQuestions = [

    question1 = 
    {
         question: `On which of the following albums did the song "Houses Of The Holy" appear?`,
         a: `Houses Of The Holy`,
         b: `Physical Graffiti`,
         c: `Led Zeppelin IV`,
         d: `Presence`,
         correct: `b`
    },

    question2 = 
    {
        question: `What color was the umbrella in the song "Living Loving Maid"?`,
        a: `Blue`,
        b: `Red`,
        c: `Purple`,
        d: `Green`,
        correct: `c`
    },

    question3 = 
    {
        question: `Where was Robert Plant going, with his "rider" by his side?`,
        a: `Rosedale`,
        b: `Mordor`,
        c: `London`,
        d: `California`,
        correct: `a`
    },

    question4 = 
    {
        question:`By how much money has the price you pay to nowhere increased?`,
        a: `Ten dollars more`,
        b: `Five dollars more`,
        c: `Eight dollars more`,
        d: `A dollar more`,
        correct: `d`
    },

    question5 = 
    {
        question: `Supposedly, Robert and "Rosie" have another child on the way, how many will they have then?`,
        a: `10`,
        b: `11`,
        c: `9`,
        d: `12`,
        correct: `b`
    },
        
    question6 = 
    {
        question: `How many Led Zeppelin songs are named after foods?`,
        a: `6`,
        b: `8`,
        c: `7`,
        d: `10`,
        correct: `a`
    },

    question7 = 
    {
        question: `What is the longest song released on Led Zeppelin's studio albums?`,
        a: `Carouselambra`,
        b: `Tea for One`,
        c: `Achilles Last Stand`,
        d: `In My Time of Dying`,
        correct: `d`
    },

    question8 = 
    {
        question: `What can you hide from Tom?`,
        a: `Anything`,
        b: `Money`,
        c: `Nothing`,
        d: `Your emotions`,
        correct: `c`
    },

    question9 = 
    {
        question: `Who did Robert meet in Mordor?`,
        a: `Gollum`,
        b: `The Evil One`,
        c: `Jimmy`,
        d: `A girl so fair`,
        correct: `d`
    },

    question10 = 
    {
        question: `Why is Robert a fool in the rain?`,
        a: `'Cause he loves her, and she don't want him no more`,
        b: `He's standing on the wrong block`,
        c: `He wanted a woman, never bargained for her`,
        d: `The Levee is going to break`,
        correct: `b`
    }

]
