'use strict';

// --------------------------------------------------------------------- On Page-Load-------------------------------------------------------
// function to call on the click of "New Game" button on homepage. will generate the form to create a new user.
function newInitialLoad() {
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
      <option value="img/artistsmpl.png">Artist</option>
      <option value="img/historiansmpl.png">Historian</option>
      <option value="img/samplephilosopher.png">Philosopher</option>
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
// let player = User.allUsers[User.allUsers.length - 1]
// console.log(player)
// --------------------------------------------------------------------- Objects-------------------------------------------------------------

/// User Object
function User(name, image) {
  this.name = name;
  this.image = image;
};

User.allUsers = [];
// --------------------------------------------------------------------- Functions-----------------------------------------------------------

// Form Submit Handler Function; Grabs Values -> Creates new Character -> Continues to first question.
function getDataForm(event) {
  event.preventDefault();
  let name = event.target.nameField.value;
  let role = event.target.role.value;
  newCharacter(name,role)
  storage();
  renderQuestions();
};

// Creates a new User & pushes this user to allUsers array
function newCharacter(name,role) {
const newPlayer = new User(name,role);
newPlayer.renderUser('displayName','displayImg');
User.allUsers.push(newPlayer);
};

// Render userNAme and Role to the GameContainer
User.prototype.renderUser = function(nameElementId,roleElementId) {
  let userName = document.getElementById(nameElementId)
  let userRole = document.getElementById(roleElementId)
  userName.textContent = this.name
  userRole.src = this.image
};



// function to render our question, image to the page; update the path() and render the next question
function renderQuestions() {
  let questionContainer = document.getElementById('question-container');
  let imageContainer = document.getElementById('npc-image');

  //Renders nps, story, question and choices to the page
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
  // Sets Image container to a specific image based
  if (game[game.path].image === '') {
  imageContainer.innerHTML = `<img src=img/greenMossPath.jpg>`
  } else {
    imageContainer.innerHTML = `<img src= ${game[game.path].image} >`
  }

  let continueGame = document.getElementById('continue');
  continueGame.addEventListener('click', function(event) {
    event.preventDefault();
    path()
    renderQuestions();
  })
};

// Renders Choices for each question onto the page
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

// Updates the path for the game
function path() {
  let path = document.querySelectorAll('input[type="radio"]')
  for (let i = 0; i < path.length; i++) {
    if (path[i].checked)
    game.path = path[i].getAttribute('data-path');
  }
}

// Renders existing user if there is storage data
User.prototype.renderExistingUser = function(nameElementId,roleElementId) {
    nameElementId.textContent = "Welcome back " + this.name + ", " +  " Its lovely to see you again...." + " would you like to continue?"
    roleElementId.textContent = "Click New Game to create a new character or Resume to continue your adventure."
  };
// Adjusts the intial load text if a user is returning to a page.
User.prototype.existingInitialLoad = function() {
    let welcomeBack = document.getElementById('storyh1');
    let welcomeText = document.getElementById('storyP');
    
    this.renderExistingUser(welcomeBack,welcomeText);

};
// Save user data to local storage
function storage() {
  const storedUsers = JSON.stringify(User.allUsers)
  localStorage.setItem( 'users', storedUsers);

}
// retrieves users from local storage -- checks if there is data in local storage and renders the page with the user data -- if no data is in local storage it will start the game as a fresh webpage.
function getStorage() {
  const getUsers = localStorage.getItem('users')
  let loadButton = document.getElementById('loadButton')
  let startButton = document.getElementById('startButton');

  if (getUsers !== null) {
    const parsedGetUsers = JSON.parse(getUsers);
   for(let users of parsedGetUsers) {
       const retrievedUsers = new User(users.name,users.image);
       User.allUsers.push(retrievedUsers)
   }
   const existingUser = (User.allUsers[User.allUsers.length -1])
   existingUser.existingInitialLoad()
   loadButton.addEventListener('click', function(){
       renderQuestions();})
    startButton.addEventListener('click', function(){
           newInitialLoad();}) 
    } else {
        startButton.addEventListener('click', function(){
            newInitialLoad();})
    };  
};

// ------------------------------------------------------- Start of Story ------------------------------------------------------------------
// ------------------------------------------------------- Chapter 1- Denial ----------------------------------------------------------------------

let game = {
    path: 'Q1',
    Q1: {
      npc: '',
      story: 'You wake as though from a dream that feels to have lasted an eternity, yet any effort to recall the details beyond brief flashes of imagery leave your head spinning. Everything aches down to your very bones. A strange feeling, you think as you raise your hands to wipe the sleep from your eyes, for you do not believe yourself old enough to have aching bones.But for a moment your hands appear old and withered before returning to a youthful state. They are covered in blood. “So you lived,” an otherworldly voice speaks to you. It is neither loud nor soft but sounds right next to you despite the distance between you and the stump upon which they sit. They wear a thick cloak, the hood pulled up to conceal their face, meticulously peeling an apple with a dagger. “You almost had me worried.” When they turn to face you, you can nearly see the gleam in their eyes. As the wind changes, the direction of the light shifts, and you see it filter across their face.',
      question: `You know this person. Not them as an individual, but you know their face. You know their deeds. You know why they are here. But that is all you know. You can not say how you ended up in this forest, if you were here to begin within or if you were brought. You do not even know your own name or whose blood stains your trembling hands. The figure approaches, extending a pale hand to offer you an apple. “Trust me, this is exactly what you deserve. Are you ready?”`,
      image: './img/greenMossPath.jpg',  
      choices: [
            {
                response: 'Yes',
                path: 'Q2A'
              },
            {
                response: 'I don\'t understand.',
                path: 'Q2A'
              },
            {
                response: 'No.',
                path: 'Q2B'
              },
            {
                response: 'I don\'t know you.',
                path: 'Q2B'
              },
        ]
    }, 

    // ----------------------------------------------------- Chapter 2- Anger ---------------------------------------------------------------------
    Q2A: {
        npc: '',
        story: 'The figure seems to frown and takes a step back. “That doesn’t sound like you at all, Username. You must have hit your head harder than I thought during the journey.”',
        question: 'Did you really expect things to be different this time?',
        image: './img/greenMossPath.jpg',
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
        npc: '',
        story: 'The figure seems to smile beneath their hood and extends the apple further, “How predictable. You said that last time.',
        question: 'Are you beginning to remember?',
        image: './img/greenMossPath.jpg',
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

    // ------------------------------------------------------- Game Over 1----------------------------------------------------------------
    gameOver1: {
        npc: '',
        story: 'You refuse to play this game, but as a result you are stuck in this forest and cannot find your way out...',
        question: 'Try your luck again?',
        image: './img/Grim Forest.jpg',
        choices: [
            {
                response: '*Walk deeper into the forest*',
                path: 'Q1',
            },
        ]
    },

// ------------------------------------------------------- Chapter 3- The Town--------------------------------------------------------------
    Q3: {
        npc: '',
        story: 'Despite your protests, the hooded figure shoves the apple in your hands. When you look down, it\'s not longer an apple, but a book bearing your name on the cover. You look up and the scenery has changed. The forest is gone and you\'re standing in the middle of a town square. The figure points out a person and you realize it\'s a younger version of you. You watch as they argue with a shopkeeper and flinch knowing that the punch is coming. As you watch the blood pooling under your younger selfs head, the figure asks:',
        question: '"Looking back now, do you think this was deserved?"',
        image: './img/townriver.png',  
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
    

    // ------------------------------------------------------- Chapter 4- The Town pt1------------------------------------------------------
    Q4A: {
        npc: '',
        story: 'The figure pauses and merely shrugs. "If you haven\t figured it out yet, you will by the time we\re done.',
        question: '"Are you alright with that?"',
        image: './img/townriver.png',
        choices: [
            {
                response: 'I suppose I have to be at this point.',
                path: 'Q4B',
            },
            {
                response: '*Take a swing at the figure*',
                path: 'Q4D',
            },
        ]
    },
    Q4B: {
        npc: '',
        story: 'Looks like you\'ve shown some growth this time around.',
        question: '"Let\'s continue."',
        image: './img/townriver.png',
        choices: [
            {
                response: 'It doesn\'t look like I seem to have a choice',
                path: 'Q5',
            },
        ]
    },
    Q4C: {
        npc: '',
        story: 'The Figure chuckles lightly and replies, "You would say that."',
        question: 'Could there have been a better way?',
        image: './img/townriver.png',
        choices: [
            {
                response: 'Yes there could\'ve been.',
                path: 'Q4F',
            },
            {
                response: 'No it was the only way',
                path: 'Q4F',
            },
            {
                response: 'I suppose it\'s possible.',
                path: 'Q4F',
            },
        ]
    },

    

    // ------------------------------------------------------- Chapter 4- The Town pt2-------------------------------------------------------
    Q4D: {
        npc: './img/townriver.png',
        story: 'The Figure merely laughs and strangely your punch doesn\'t even make contact.',
        question: 'Are you done with your temper tantrum?',
        image: '',
        choices: [
            {
                response: 'You\'re not gonna win me over with this.',
                path: 'Q4E',
            },
            {
                response: 'For now...',
                path: 'Q5',
            },
        ]
    },
    Q4E: {
        npc: '',
        story: 'The figure stands by as you pace, blowing off steam, allowing you to calm down. After a few minutes, the figure continues on.',
        question: '',
        image: './img/townriver.png',
        choices: [
            {
                response: 'Follow the Figure.',
                path: 'Q5',
            },
        ]
    },

    Q4F: {
        npc: '',
        story: 'The figure no longer seems to be listening and walks away. The only way to get answers is to play his game, so you follow after him.',
        question: '',
        image: './img/townstreet.jpg',
        choices: [
            {
                response: 'Continue on...',
                path: 'Q5',
            },
        ]
    },

      // ------------------------------------------------------- Chapter 5- The Church------------------------------------------------------

      Q5: {
        npc: '',
        story: 'The cloaked figure ushers you into a church. You know this church. You have been here before, and you see that version of yourself sitting in a pew. The memories are beginning to return the longer you are with this figure. You know what is coming. You remember what led you to this place before. You are beginning to understand the purpose behind this figure’s game.',
        question: 'Do you still blame yourself?',
        image: '',  
        choices: [
              {
                  response: 'It was never my fault.',
                  path: 'Q6A'
                },
              {
                  response: 'I don\'t think anyone was to blame.',
                  path: 'Q6A'
                },
              {
                  response: 'Yes, I think about it all the time.',
                  path: 'Q6B'
                },
              {
                  response: 'I could\'ve prevented it.',
                  path: 'Q6B'
                },
          ]
      }, 
  

    // -----------------------------------------------------Chapter 6- The Church pt--------------------------------------------------------

    Q6A: {
        npc: '',
        story: 'The Figure remains silent for a moment. He almost seems disappointed.',
        question: 'Is that what you really think?',
        image: '',
        choices: [
            {
                response: 'No...',
                path: 'Q7',
            },
            {
                response: '...No',
                path: 'Q7',
            },
        ]
    },
    Q6B: {
        npc: '',
        story: 'The Figures eyes seem to shine and you swear you actually see him smile.',
        question: 'Then why didn\t you stop them?',
        image: '',
        choices: [
            {
                response: 'I didn\'t know...',
                path: 'Q6C',
            },
            {
                response: 'They didn\'t ask for help!',
                path: 'Q6C',
            },
        ]
    },
    Q6C: {
        npc: '',
        story: 'The figure sighs and shakes his head. He says, "The signs were there. If you weren\'t so self involved you would\'ve seen them."',
        question: 'How do you respond?',
        image: '',
        choices: [
            {
                response: 'That isn\'t how it happened!',
                path: 'GameOver2',
            },
            {
                response: 'You\'re right. I should\'ve been paying more attention.',
                path: 'Q6D',
            },
        ]
    },
    Q6D: {
        npc: '',
        story: 'The figure nods solemnly and you know your former self is thinking the same. In time you\'ll come to peace with what transpired.',
        question: '',
        image: '',
        choices: [
            {
                response: 'Continue on.',
                path: 'Q7',
            },
        ]
    },

    // ------------------------------------------------------- Game Over 2---------------------------------------------------------------

    GameOver2: {
        npc: '',
        story: 'The figure appears angered. Raising his voice he says, "You\'ll never learn."',
        question: 'Try again?',
        image: '',
        choices: [
            {
                response: 'Continue on...',
                path: 'Q1',
            },
        ]
    },
    // ------------------------------------------------------- Chapter 7 - Home----------------------------------------------------------

    Q7: {
        npc: '',
        story: 'You follow the figure out of the church, but the moment you step outside, you\'re in your former home. You see your younger self at the table, but they do not notice you know. They are preoccupied with their drink. This is something you remember, but you cannot say how many drinks you had, or what other substances you consumed. Even without looking in the book, you could easily identify what page this event takes place on.',
        question: 'Did you ever expect it to get to this point?',
        image: './img/forest house.jpg',  
        choices: [
              {
                  response: 'No. Why didn\'t anyone stop me?',
                  path: 'Q8A'
                },
              {
                  response: 'It was already out of my hands.',
                  path: 'Q8A'
                },
              {
                  response: 'I should\'ve realized it was possible.',
                  path: 'Q8B'
                },
              {
                  response: 'I wanted it to get to this point.',
                  path: 'Q8C'
                },
          ]
      }, 

// ------------------------------------------------------- Chapter 8- Home pt 2-------------------------------------------------------------

Q8A: {
    npc: '',
    story: 'The Figure scoffs and shakes his head yet again as if he can\'t believe nothing has changed.He says, "you act as though the universe had some grand plan, but life doesn\'t work that way."',
    question: 'What makes you so important?',
    image: './img/forest house.jpg',
    choices: [
        {
            response: 'Aren\'t we all important?',
            path: 'Q9',
        },
        {
            response: 'I\'m not. No one is.',
            path: 'Q9',
        },
    ]
},
Q8B: {
    npc: '',
    story: 'The Figure replies, "Anything is with the wrong motivations."',
    question: 'Do you regret what happened up to this point?',
    image: './img/forest house.jpg',
    choices: [
        {
            response: 'Absolutely.',
            path: 'Q9',
        },
        {
            response: 'Absolutely not.',
            path: 'GameOver3',
        },
    ]
},
Q8C: {
    npc: '',
    story: '"How pitiful," The Figure replies. "You truly are wasted potential.',
    question: 'Do you have any regrets?',
    image: './img/forest house.jpg',
    choices: [
        {
            response: 'Yes.',
            path: 'Q9',
        },
        {
            response: 'No.',
            path: 'Q9',
        },
    ]
},

// ------------------------------------------------------- Game Over 3 -------------------------------------------------------------------
GameOver3: {
    npc: '',
    story: 'Clearly we have more work to do. Let\'s try this again.',
    question: '',
    image: '',
    choices: [
        {
            response: 'Continue?',
            path: 'Q1',
        },
    ]
},

// ------------------------------------------------------- Chapter 9 - Acceptance-----------------------------------------------------------

Q9: {
    npc: '',
    story: 'It\'s at this point that your younger self finally notices your presence. More specifically, the cloaked figure beside you. They become distraught as if they know what\'s coming next. You turn away not wanting to see, not wanting to hear, not wanting to play this game anymore. Your heart pounds in your ears and the moment you blink, you are back in the forest. The figure holds out another apple, "I\'m sorry you had to see that."',
    question: 'Would you have done it any differently?',
    image: './img/forest-glow.jpg',  
    choices: [
          {
              response: 'Yes I would.',
              path: 'Q9A'
            },
          {
              response: 'No I wouldn\'t.',
              path: 'Q9B'
            },
            {
                response: 'Yes can I try again?',
                path: 'GameOver4'
              },
      ]
  }, 
  Q9A: {
    npc: '',
    story: 'Alas, life doesn\'t work that way. You still have some improvements to make, but you\'ve come this far. I think you\'ve suffered enough.',
    question: 'learn your fate?',
    image: './img/forest-glow.jpg',  
    choices: [
          {
              response: 'Yes.',
              path: 'Q10A'
            },   
      ]
  }, 
  Q9B: {
    npc: '',
    story: 'Good. Even living a life full of regrets is something you must accept in the end. You\'ve come far old friend.',
    question: 'Learn your fate?',
    image: './img/forest-glow.jpg',  
    choices: [
          {
              response: 'Yes.',
              path: 'Q10B'
            },   
      ]
  }, 
  
 // ------------------------------------------------------- Game Over 4 ------------------------------------------------------------------- 
 GameOver4: {
    npc: 'Game Over',
    story: 'Cleary you\'ve learned nothing. Yes we\'ll try again',
    question: '',
    image: '',  
    choices: [
          {
              response: 'Try again...',
              path: 'Q1'
            }, 
      ]
  },
// ------------------------------------------------------- Chapter 10 - Fate---------------------------------------------------------------

Q10A: {
    npc: '',
    story: 'He leaves you in the forest to contemplate your choices, with the promise that he is only a call away. When you have fully accepted the weight of your decision, you are free to be released.',
    question: 'The End. Return home?',
    image: './img/bridge.jpg',  
    choices: [
          {
              response: 'Return Home.',
              path: 'Q1'
            },
      ]
  }, 
  Q10B: {
    npc: '',
    story: 'You have acknowledged and accepted the wrongs committed in your life. You are aware there is no going back and a life with regrets is nothing to fear. He releases you from this place.',
    question: '',
    image: './img/bridge.jpg',  
    choices: [
          {
              response: 'The End. return home?',
              path: 'Q1'
            },
      ]
  },
}; 
  
    // ----------------------------------------------------Function Calls-------------------------------------------------------------------

getStorage();

