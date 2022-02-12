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
        question: `What do the seasons of emotion do?`,
        a: ``,
        b: ``,
        c: ``,
        d: ``,
        correct: ``
    },
    question4 = 
    {
        question:``,
        a: ``,
        b: ``,
        c: ``,
        d: ``,
        correct: ``
    }
        

    


]
