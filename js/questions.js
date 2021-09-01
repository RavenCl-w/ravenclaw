'use strict';

// --------------------------------------------------------------------- On Page-Load ----------------------------------------------------------------------------

// On Page Load ('DOMContentLoaded') will create our 3 variables bellow and then load an eventlistener that awaits a 'click' on 'start game'. 
document.addEventListener('DOMContentLoaded', function() {
  let startButton = document.getElementById('startButton');
  let loadGame = document.getElementById('loadButton');
  let gameContainer = document.getElementById('question-container');
  let imageContainer = document.getElementById('npc-image');
  let form = '';
  let startYourAdventureButton = '';


  startButton.addEventListener('click', function(){
    gameContainer.innerHTML = `
    <div id="player-info">
      <h1>Hello New Player, What do we call you?<h1>
      
      <form id="character-form"> 
      <label>'Sign Here'</label>
      <input type="text" id="userName" name="name" placeholder="sign on the dotted line">
      
      <label for='classSelection'>Select Your Class </label>
      <select name="role" id="classSelection">
      <option value="artist">Artist</option>
      <option id="historian" value="historian">Historian</option>
      <option  value="philosopher">Philosopher</option>
      </select>
      <input type="submit" id="submit" value="Start your Adventure">
      <form>
      <div>`;
    imageContainer.innerHTML = '<img src=img/traveler.jpeg>';
    form = document.getElementById('character-form')
    startYourAdventureButton = document.getElementById('submit')
    startYourAdventureButton.addEventListener('click', function(event) {
      event.preventDefault();
      renderQuestions();
      
      // form.addEventListener('click', function(event) {
      //   // const name = event.target.name.value
      //   let role = document.getElementsById('historian')
      //   let roleValue = event.target.role.value
      //   console.log(roleValue)
    
    });
  });
});
//   loadGame.addEventListener('click' function() {})


// --------------------------------------------------------------------- Variables --------------------------------------------------------------------------------
User.allUsers = [];
let gameContainer = document.getElementById('question-container');

let continueGame = '';

// --------------------------------------------------------------------- Objects ----------------------------------------------------------------------------------

/// Questions POJO (Plain-Old-Javascript-Object)


/// User Object
function User(name, image) {
  this.name = name;
  this.image = image;
};



// --------------------------------------------------------------------- Functions --------------------------------------------------------------------------------



//// Trying to create a function to take unput from character submit button and create a User and push to User.allUser[];
function newCharacter() {
  let namevalue = document.getElementById(userName)
  let name = namevalue.value;
  console.log(name);
  let role = event.target;
const newPlayer = new User(name,role);
User.allUsers.push(newPlayer);
};



// --------------------------------------------------------------------- Listeners --------------------------------------------------------------------------------

// --------------------------------------------------------------------- Function Calls ----------------------------------------------------------------------------



let game = {
  // ------------------------------------------------------- Chapter 1 ----------------------------------------------------------------------
    path: 'Q1',
    Q1: {
      npc: 'this is the name of the npc',
      story: 'this is where the npc conveys their story',
      question: 'Insert Question here',
        choices: [
            {
                response: 'This is Question 1: fjhshdfjsdfjdsjfhjdshfjdsmm',
                path: 'Q2'
              },
            {
                response: 'This is Question 2: jklahfahfahsklfhakslhflahsl',
                path: 'Q2'
              },
            {
                response: 'This is question 3: wifjalhflasdhfjhadsjfhjdshf',
                path: 'Q3'
              },
            {
                response: 'This is question 4: jhfjkqewhfkewgkfgsdjkgfdshk',
                path: 'Q3'
              },
        ]
    }, 

    // ----------------------------------------------------- Chapter 2 ---------------------------------------------------------------------
    jail: {},
    Q2: {
        npc: 'this is the name of the npc',
        story: 'this is where the npc conveys their story',
        question: 'Insert Question here',
        choices: [
            {
                response: '2a',
                path: 'Q3',
            },
            {
                response: '2b',
                path: 'Q3',
            },
            {
                response: '2c',
                path: 'Q1',
            },
            {
                response: '2d',
                path: 'Q1',
            },
        ]
    },

    // ------------------------------------------------------- Chapter 3 -------------------------------------------------------------------
    Q3: {
        npc: 'this is the name of the npc',
        story: 'this is where the npc conveys their story',
        question: 'Insert Question here',
        choices: [
          {
              response: '3a',
              path: '',
          },
          {
              response: '3b',
              path: '',
          },
          {
              response: '3c',
              path: '',
          },
          {
              response: '3d',
              path: '',
          },
      ]
  },
};

    // ------------------------------------------------------- Chapter 4 -------------------------------------------------------------------


    // ------------------------------------------------------- Chapter 5 -------------------------------------------------------------------


    // ------------------------------------------------------- Chapter 6 -------------------------------------------------------------------


    // ------------------------------------------------------- Chapter 7 -------------------------------------------------------------------
    

//Add an ID for <div> above questions. 
function renderQuestions() {
  gameContainer.innerHTML = `
  <div id="questions-container">
  <h1>${game[game.path].npc} <h1> 
  <p>${game[game.path].story} <p>
  <div> 
  <p>${game[game.path].question}<p>
  ${renderChoices()}
  <input type="submit" id="continue" value="Continue...">
  <div>
  <div>
  `

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




// function startGame(event) {
//   console.log(event.target);
// }

