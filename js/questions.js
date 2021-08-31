'use strict';

// --------------------------------------------------------------------- On Page-Load ----------------------------------------------------------------------------

// On Page Load ('DOMContentLoaded') will create our 3 variables bellow and then load an eventlistener that awaits a 'click' on 'start game'. 
document.addEventListener('DOMContentLoaded', function() {
  let startButton = document.getElementById('startButton');
  let loadGame = document.getElementById('loadButton');
  let gameContainer = document.getElementById('question-container');
  let imageContainer = document.getElementById('npc-image');
  let startYourAdventureButton = document.getElementById('character-submit');


  startButton.addEventListener('click', function(){
    gameContainer.innerHTML = `
      <h1>Hello New Player, What do we call you?<h1>
      
      <form> 
      <label>'Sign Here'</label>
      <input type="text" id="userName" placeholder="sign on the dotted line">
      
      <label for='classSelection'>Select Your Class </label>
      <select id="classSelection">
      <option value="artist">Artist</option>
      <option value="historian">Historian</option>
      <option value="philosopher">Philosopher</option>
      <select>
      <input id="character-submit" type="submit" value="Start your Adventure">
      ${renderChoices()};
      <form>`;
    imageContainer.innerHTML = '<img src=img/traveler.jpeg>';
  });

});
//   loadGame.addEventListener('click' function() {})


// --------------------------------------------------------------------- Variables --------------------------------------------------------------------------------
User.allUsers = [];
let startYourAdventureButton = document.getElementById('character-submit');

// --------------------------------------------------------------------- Objects ----------------------------------------------------------------------------------

/// Questions POJO (Plain-Old-Javascript-Object)
let question = {
}

/// User Object
function User(name, role) {
  this.name = name;
  this.role = role;
  this.lives = 3;
  this.curentQuestion = '';
}

// --------------------------------------------------------------------- Functions --------------------------------------------------------------------------------



//// Trying to create a function to take unput from character submit button and create a User and push to User.allUser[];
function newCharacter(event) {
  console.log(event.target);
//   let name = event.target;
//   let role = event.target;
//   const newPlayer = new User(name,role);
//   User.allUsers.push(newPlayer);
}





// --------------------------------------------------------------------- Listeners --------------------------------------------------------------------------------

// --------------------------------------------------------------------- Function Calls ----------------------------------------------------------------------------



let story = {
    currentQuestion: 'Question One',
    questionOne: {
        npc: 'The Mysterious Figure',
        story: 'this is question 1',
        choices: [
            {
                response: '1a',
              },
            {
                response: '1b',
              },
            {
                response: '1c',
              },
            {
                response: '1d',
              },

                // destination: 'questionTwo',
        ]
    }, 
    questionTwo: {
        npc: 'The Bartender',
        story: 'this is question 2',
        choices: [
            {
                response: '2a',
                response: '2b',
                response: '2c',
                response: '2d',
                destination: 'questionThree',
            },
        ]
    },
    questionThree: {
        npc: 'The Criminal',
        story: 'this is question 3',
        choices: [
            {
                response: '3a',
                response: '3b',
                response: '3c',
                response: '3d',
                destination: 'questionFour',
            },
        ]
    },
}

function renderQustions() {
  gameContainer.innerHTML = " ";
}

function renderChoices() {
  let response = " ";
  for(let i = 0; i < story.questionOne.choices.length; i++) {
    response += `
    <div>
    <input id = "radio${i}" type = "radio" name = "response"/>
    <label for "radio${i}">${story.questionOne.choices[i].response}</label>
    </div>
    `
  }
  return response;
}

function startGame(event) {
  console.log(event.target)
}

startYourAdventureButton.addEventListener('submit', function() {
  h1.innerHTML = 

})