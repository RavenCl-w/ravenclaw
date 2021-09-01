'use strict';

// --------------------------------------------------------------------- On Page-Load-------------------------------------------------------

function initialLoad() {
  let startButton = document.getElementById('startButton');
  let questionContainer = document.getElementById('question-container');
  let imageContainer = document.getElementById('npc-image');
  

  startButton.addEventListener('click', function(event){
    event.preventDefault();
    questionContainer.innerHTML = `
    <div class="wrapper">
      <h1>Hello New Player, What do we call you?<h1>
      
      <form id="form" onsubmit="return false"> 
      
      <label id="nameField">'UserName'</label>
      <input type="text" name="nameField" placeholder="UserName" required>
      </label>

      <label id="role">Select Your Class</label>
      <select name="role" id="classSelection">
      <option value="'img/traveler.jpeg'">Artist</option>
      <option value="historian">Historian</option>
      <option value="philosopher">Philosopher</option>
      </select>
      </label>

      <button type="submit" id="submitButton"> Start Your Adventure</button>
      </form>
      <div>`;  

    let form = document.querySelector('form');
    imageContainer.innerHTML = '<img src=img/paintedPath.JPG>';
    form.addEventListener('submit', getDataForm)

      

  });
};


// --------------------------------------------------------------------- Variables-----------------------------------------------------------
{/* <img id="displayImg" src="">
<h1 id="displayName"></h1> */}



let continueGame = '';
User.allUsers = [];
// --------------------------------------------------------------------- Objects-------------------------------------------------------------

/// User Object
function User(name, image) {
  this.name = name;
  this.image = image;
};

// --------------------------------------------------------------------- Functions-----------------------------------------------------------

//// Trying to create a function to take unput from character submit button and create a User and push to User.allUser[];
function getDataForm(event) {
  event.preventDefault();
  let name = event.target.nameField.value;
  let role = event.target.role.value;
  newCharacter(name,role)
  // post to game container here
  renderQuestions();
};

// Creates a new User & pushes this user the all users array
function newCharacter(name,role) {
const newPlayer = new User(name,role);
newPlayer.renderUser();
User.allUsers.push(newPlayer);
};

User.prototype.renderUser = function() {
  // greab reference to username feild in html
  let userName = document.getElementById('displayName')
  console.log(userName)
  // grab reference to image in html
  let userRole = document.getElementById('displayImg').src
  // Grab User information
  
  
  // update the text content of each element in the field. 
  userName.textContent = this.name
  console.log(userName)
  userRole.textContent = this.role
  console.log(userRole)

  //post to game container.

};

// --------------------------------------------------------------------- Listeners ----------------------------------------------------------

// --------------------------------------------------------------------- Function Calls------------------------------------------------------



  // ------------------------------------------------------- Chapter 1 ----------------------------------------------------------------------

let game = {
    path: 'Q1',
    Q1: {
      npc: 'Denial',
      story: 'You wake as though from a dream that feels to have lasted an eternity, yet any effort to recall the details beyond brief flashes of imagery leave your head spinning. Everything aches down to your very bones. A strange feeling, you think as you raise your hands to wipe the sleep from your eyes, for you do not believe yourself old enough to have aching bones.But for a moment your hands appear old and withered before returning to a youthful state. They are covered in blood. “So you lived,” an otherworldly voice speaks to you. It is neither loud nor soft but sounds right next to you despite the distance between you and the stump upon which they sit. They wear a thick cloak, the hood pulled up to conceal their face, meticulously peeling an apple with a dagger. “You almost had me worried.” When they turn to face you, you can nearly see the gleam in their eyes. As the wind changes, the direction of the light shifts, and you see it filter across their face.',
      question: 'You know this person. Not them as an individual, but you know their face. You know their deeds. You know why they are here. But that is all you know. You can not say how you ended up in this forest, if you were here to begin within or if you were brought. You do not even know your own name or whose blood stains your trembling hands. The figure approaches, extending a pale hand to offer you an apple. “Trust me, userName this is exactly what you deserve. Are you ready?”',
      image: {//image src}
        choices: [
            {
                response: 'Yes(this will take you to q2a)',
                path: 'Q2A'
              },
            {
                response: 'I don\'t understand (this will take you to q2a) ',
                path: 'Q2A'
              },
            {
                response: 'No.(this will take you to question q2b)',
                path: 'Q2B'
              },
            {
                response: 'I don\'t know you. (this will take you ro q2b)',
                path: 'Q2B'
              },
        ]
    }, 

    // ----------------------------------------------------- Chapter 2 ---------------------------------------------------------------------
    Q2A: {
        npc: 'Anger2a',
        story: 'The figure seems to frown and takes a step back. “That doesn’t sound like you at all, Username. You must have hit your head harder than I thought during the journey.”',
        question: 'Did you really expect things to be different this time?',
        choices: [
            {
                response: 'I don\'t know what you mean...',
                path: 'Q3',
            },
            {
                response: 'I\m not playing this game with you.',
                path: 'Q3',
            },
        ]
    },
    Q2B: {
        npc: 'Anger2b',
        story: 'The figure seems to smile beneath their hood and extends the apple further, “How predictable. You said that last time.',
        question: 'Are you beginning to remember?',
        choices: [
            {
                response: '...Last time?',
                path: 'Q3',
            },
            {
                response: '*Ignore him and walk away*',
                path: 'gameOver1',
            },
        ]
    },

    // ------------------------------------------------------- Game Over 1 -------------------------------------------------------------------
    gameOver1: {
        npc: 'Game Over',
        story: 'You refuse to play this game, but as a result you are stuck in this forest and cannot find your way out...',
        question: 'Try your luck again?',
        choices: [
            {
                response: '*Walk deeper into the forest*',
                path: 'Q1',
            },
        ]
    },

// ------------------------------------------------------- Chapter 3 -------------------------------------------------------------------
    Q3: {
        npc: 'this is the name of the npc',
        story: 'Despite your protests, the hooded figure shoves the apple in your hands. When you look down, it\'s not longer an apple, but a book bearing your name on the cover. You look up and the scenery has changed. The forest is gone and you\'re standing in the middle of a town square. The figure points out a person and you realize it\'s a younger version of you. You watch as they argue with a shopkeeper and flinch knowing that the punch is coming. As you watch the blood pooling under your younger selfs head, the figure asks:',
        question: '"Looking back now, do you think this was deserved?"',
          choices: [
              {
                  response: 'What is happening??',
                  path: 'Q4A'
                },
              {
                  response: 'Yes.This is absolutely deserved...',
                  path: 'Q4B'
                },
              {
                  response: 'I should\'ve punched first!',
                  path: 'Q4C'
                },
              {
                  response: 'No.',
                  path: 'Q4A'
                },
          ]
      }, 
    

    // ------------------------------------------------------- Chapter 4 -------------------------------------------------------------------
    Q4A: {
        npc: 'this is the name of the npc',
        story: 'The figure pauses and merely shrugs. "If you haven\t figured it out yet, you will by the time we\re done.',
        question: '"Are you alright with that?"',
        choices: [
            {
                response: 'I suppose I have to be at this point.',
                path: 'Q4Pt2',
            },
            {
                response: '*Take a swing at the figure*',
                path: 'Q4Pt2',
            },
        ]
    },
    Q4B: {
        npc: 'this is the name of the npc',
        story: 'this is the story for chapter 4 path b',
        question: 'Insert Question here',
        choices: [
            {
                response: '4c',
                path: 'Q5',
            },
        ]
    },
    Q4C: {
        npc: 'this is the name of the npc',
        story: 'this is the story for chapter 4 path b',
        question: 'Insert Question here',
        choices: [
            {
                response: '4c',
                path: 'Q5',
            },
        ]
    },

    

    // ------------------------------------------------------- Chapter 4 pt2 -------------------------------------------------------------------
    Q4Pt2: {
        npc: 'this is the name of the npc',
        story: 'The figure pauses and merely shrugs. "If you haven\t figured it out yet, you will by the time we\re done.',
        question: '"Are you alright with that?"',
        choices: [
            {
                response: 'I suppose I have to be at this point.',
                path: 'Q5',
            },
            {
                response: '*Take a swing at the figure*',
                path: 'Q5',
            },
        ]
    },
    Q4B: {
        npc: 'this is the name of the npc',
        story: 'this is the story for chapter 4 path b',
        question: 'Insert Question here',
        choices: [
            {
                response: '4c',
                path: 'Q5',
            },
            {
                response: '4d',
                path: 'Q5',
            },
        ]
    },

      // ------------------------------------------------------- Chapter 5 -------------------------------------------------------------------

      Q5: {
        npc: 'this is the name of the npc',
        story: 'this is the story for chapter 5',
        question: 'this is the fifth question. no matter what chapter 4 path you went to, you\'ll come here',
          choices: [
              {
                  response: '5a: ',
                  path: 'Q6A'
                },
              {
                  response: '5b: ',
                  path: 'Q6A'
                },
              {
                  response: '5c:',
                  path: 'Q6B'
                },
              {
                  response: '5d: ',
                  path: 'Q6B'
                },
          ]
      }, 
  

    // ------------------------------------------------------- Chapter 6 -------------------------------------------------------------------

    Q6A: {
        npc: 'this is the name of the npc',
        story: 'this is the story for chapter 6 path a',
        question: 'Insert Question here',
        choices: [
            {
                response: '6a',
                path: 'Q7',
            },
            {
                response: '6b',
                path: 'Q7',
            },
        ]
    },
    Q6B: {
        npc: 'this is the name of the npc',
        story: 'this is the story for chapter 6 path b',
        question: 'Insert Question here',
        choices: [
            {
                response: '6c',
                path: 'Q7',
            },
            {
                response: '6d',
                path: 'Q7',
            },
        ]
    },

    
    // ------------------------------------------------------- Chapter 7 -------------------------------------------------------------------

    Q7: {
        npc: 'this is the name of the npc',
        story: 'this is the story for chapter 7',
        question: 'this is the seventh question. no matter what chapter 6 path you went to, you\'ll come here',
          choices: [
              {
                  response: '7a: ',
                  path: 'Q8A'
                },
              {
                  response: '7b: ',
                  path: 'Q8A'
                },
              {
                  response: '7c:',
                  path: 'Q8B'
                },
              {
                  response: '7d: ',
                  path: 'Q8B'
                },
          ]
      }, 

// ------------------------------------------------------- Chapter 8 -------------------------------------------------------------------

Q8A: {
    npc: 'this is the name of the npc',
    story: 'this is the story for chapter 8 path a',
    question: 'Insert Question here',
    choices: [
        {
            response: '8a',
            path: 'Q9',
        },
        {
            response: '8b',
            path: 'Q9',
        },
    ]
},
Q8B: {
    npc: 'this is the name of the npc',
    story: 'this is the story for chapter 8 path b',
    question: 'Insert Question here',
    choices: [
        {
            response: '8c',
            path: 'Q9',
        },
        {
            response: '8d',
            path: 'Q9',
        },
    ]
},

// ------------------------------------------------------- Chapter 9 -------------------------------------------------------------------

Q9: {
    npc: 'this is the name of the npc',
    story: 'this is the story for chapter 9',
    question: 'this is the ninth question. no matter what chapter 8 path you went to, you\'ll come here',
      choices: [
          {
              response: '9a: ',
              path: 'Q10'
            },
          {
              response: '9b: ',
              path: 'Q10'
            },
          {
              response: '9c:',
              path: 'Q10'
            },
          {
              response: '9d: ',
              path: 'Q10B'
            },
      ]
  }, 


// ------------------------------------------------------- Chapter 10 -------------------------------------------------------------------

Q10: {
    npc: 'this is the name of the npc',
    story: 'this is the story for chapter 10. should we wrap it up here? if so, there will be no more questions, just the final story',
    question: 'might not need a question for this part. but let\'s talk',
    choices: [
      {
          response: '10a',
          path: 'Q10A',
      },
      {
          response: '10b',
          path: 'Q10A',
      },
      {
          response: '10c',
          path: 'Q10B',
      },
      {
          response: '10d',
          path: 'Q10C',
      },
  ]
},
};
  
//Add an ID for <div> above questions. 
function renderQuestions() {
  let questionContainer = document.getElementById('question-container');
  questionContainer.innerHTML = `
  <div id="questions-container">
  <h1 id="qcH1">${game[game.path].npc} <h1> 
  <p id="qcStory">${game[game.path].story} <p>
  <p id="qcQuestion">${game[game.path].question}<p>
  <div id="choiceGroup">
  ${renderChoices()}
  </div>
  <input type="submit" id="continue" value="Continue...">
  <div> 
  `
// insert inner.HTML ' for the image of the specific path being callled' 
  let continueGame = document.getElementById('continue');
  continueGame.addEventListener('click', function(event) {
    event.preventDefault();
    path()
    renderQuestions();
  })
};

function renderChoices() {
  let response = " ";
  for(let i = 0; i < game[game.path].choices.length; i++) {
    response += `
    <div id="choice-container">
    <input data-path = ${game[game.path].choices[i].path} id = "radio${i}" type = "radio" name = "response"/>
    <label for "radio${i}">${game[game.path].choices[i].response}</label>
    </div>
    `;


  }
  return response;
}


function path() {
  let path = document.querySelectorAll('input[type="radio"]')
  for (let i = 0; i < path.length; i++) {
    if (path[i].checked)
    game.path = path[i].getAttribute('data-path');
    console.log(game.path)
  }
}


    // ----------------------------------------------------Function Calls-------------------------------------------------------------------

initialLoad();
