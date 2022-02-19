// Step 1, code the timer
// Step 2, code the questions
//Step 3, code the leader board




// Dynamic HTML declarations
let beginQuiz = document.querySelector('#start-quiz');
let mainEl = document.querySelector('#main');
let welcomeEl = document.querySelector('#welcome');
let timerText = document.createElement('h3');
let bodyEl = document.querySelector ('#body');
let leaderBoardEl = document.createElement('ol');
let users = [];


// Setting HTML attributes
let questionEl = document.createElement('h2');
let choices = document.createElement('ul');
choices.setAttribute('class', 'answer-list')
let a = document.createElement('li');
a.setAttribute('id', 'a');
let b = document.createElement('li');
b.setAttribute('id', 'b');
let c = document.createElement('li');
c.setAttribute('id', 'c');
let d = document.createElement('li');
d.setAttribute('id', 'd');

// Reused variables, timer variables
let gameEnd = false
let seconds = 60;
let i = 0;

// All of the quiz questions, not about JS. 
const quizQuestions = [
    {
         question: `On which of the following albums did the song "Houses Of The Holy" appear?`,
         a: `Houses Of The Holy`,
         b: `Physical Graffiti`,
         c: `Led Zeppelin IV`,
         d: `Presence`,
         correctAns: `b`
    },

    {
        question: `What color was the umbrella in the song "Living Loving Maid"?`,
        a: `Blue`,
        b: `Red`,
        c: `Purple`,
        d: `Green`,
        correctAns: `c`
    },

    {
        question: `Where was Robert Plant going, with his "rider" by his side?`,
        a: `Rosedale`,
        b: `Mordor`,
        c: `London`,
        d: `California`,
        correctAns: `a`
    },

    {
        question:`By how much money has the price you pay to nowhere increased?`,
        a: `Ten dollars more`,
        b: `Five dollars more`,
        c: `Eight dollars more`,
        d: `A dollar more`,
        correctAns: `d`
    },

    {
        question: `Supposedly, Robert and "Rosie" have another child on the way, how many will they have then?`,
        a: `10`,
        b: `11`,
        c: `9`,
        d: `12`,
        correctAns: `b`
    },
        

    {
        question: `How many Led Zeppelin songs are named after foods?`,
        a: `6`,
        b: `8`,
        c: `7`,
        d: `10`,
        correctAns: `a`
    },

    {
        question: `What is the longest song released on Led Zeppelin's studio albums?`,
        a: `Carouselambra`,
        b: `Tea for One`,
        c: `Achilles Last Stand`,
        d: `In My Time of Dying`,
        correctAns: `d`
    },

    {
        question: `What can you hide from Tom?`,
        a: `Anything`,
        b: `Money`,
        c: `Nothing`,
        d: `Your emotions`,
        correctAns: `c`
    },

    {
        question: `Who did Robert meet in Mordor?`,
        a: `Gollum`,
        b: `The Evil One`,
        c: `Jimmy`,
        d: `A girl so fair`,
        correctAns: `d`
    },

    {
        question: `Why is Robert a fool in the rain?`,
        a: `'Cause he loves her, and she don't want him no more`,
        b: `He's standing on the wrong block`,
        c: `He wanted a woman, never bargained for her`,
        d: `The Levee is going to break`,
        correctAns: `b`
    }

];
// Start quiz functions/ Timer functions
let timer = function() {
        let countdown = setInterval(function () {
          if (seconds > 0) {
               seconds --;
              timerText.textContent = seconds;
          }
        else if (gameEnd = true) {
            clearInterval(countdown);
            endQuiz();
        }
         else {
            welcomeEl.textContent = ''
            mainEl.textContent = ''
            clearInterval(countdown); 
            endQuiz();
          };
        }, 1000)
    };
// Start quiz functions, declares 
const startQuiz = () => {
    
    event.preventDefault();
    welcomeEl.innerHTML= '';
    mainEl.append(timerText);


    a.addEventListener('click', checkAns);
    b.addEventListener('click', checkAns);
    c.addEventListener('click', checkAns);
    d.addEventListener('click', checkAns);

    
    timer();
    displayQuest();
};



// Display questions function
  const displayQuest = () => {
   if (seconds != 0 && i < quizQuestions.length) {
       
    questionEl.textContent = quizQuestions[i].question

    a.textContent = quizQuestions[i].a;
    b.textContent = quizQuestions[i].b;
    c.textContent = quizQuestions[i].c;
    d.textContent = quizQuestions[i].d;

    choices.appendChild(a);
    choices.appendChild(b);
    choices.appendChild(c);
    choices.appendChild(d);


    welcomeEl.appendChild(questionEl);     
    welcomeEl.appendChild(choices);

   }
   else {
       endQuiz();
   }
    
    };


    let userPoints = 0;
//Check answer function
    const checkAns = (Option) => {
        
       if (Option.target.id === quizQuestions[i].correctAns) {
        i++;
        welcomeEl.textContent = 'Correct!'
        userPoints += 10;
        displayQuest();
       }
       else {
           welcomeEl.textContent = 'Incorrect!'
           seconds -= 10;
           i++;
           displayQuest();
       }
    };

// Game over functions
    const endQuiz = () => {
        gameEnd = true;
        
        
        mainEl.innerHTML = `<p>The quiz is over! Enter your initials below to save your score!</p>  </br> Your score: `+ userPoints;

        var saveScoreDiv = document.createElement('div');
        var saveScoreI = document.createElement('input');
        var saveScoreBtn = document.createElement('button');
        
        saveScoreI.setAttribute('id', 'userInput');
        saveScoreBtn.setAttribute('type', 'submit');
        saveScoreBtn.textContent = `Submit Score!`;
        saveScoreDiv.append(saveScoreI, saveScoreBtn);
        mainEl.appendChild(saveScoreDiv);

        saveScoreBtn.addEventListener('click', saveScore);
    };

    // Saves to local storage
    const saveScore = () => {
        loadScore();
        let user = {
            initials: document.getElementById('userInput').value,
            score: userPoints
        }
        if (!user.initials) {
            alert('You need to enter your initials!');
            return false;
        };
        users.push(user);
        
        
        users.sort((a,b) => b.score - a.score);
        localStorage.setItem('users', JSON.stringify(users));

        for (i = 0; i < users.length; i++) {
            leaderBoardEl.append(createLi(users[i].initials, users[i].score));
        };


        mainEl.textContent = `Leader Board`
        mainEl.appendChild(leaderBoardEl);
       
        

    };
    // Loads the scores from Local storage
        const loadScore = () => {

        let savedUsers = localStorage.getItem('users');
        
                if (!savedUsers) {
                return false;
                     }
        savedUsers = JSON.parse(savedUsers);
        for (i = 0; i < savedUsers.length; i++) {
            users.push(savedUsers[i]);
        }
    };

    const createLi = (initials, score) => {
        let tempVar = document.createElement('li');
        tempVar.textContent = initials + ' ' + score;
        return tempVar;
    };
    
// Event Listener
beginQuiz.addEventListener('click', startQuiz);