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
      <option value="artist">Artist</option>
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
  console.log(event.target)
  // let formData = new FormData(form[0]);

  alert( event.target.nameField.value + event.target.role.value)

  renderQuestions();
};

///// Clean this up!!
function newCharacter() {
  let namevalue = document.getElementById(userName)
  let name = namevalue.value;
  console.log(name);
  let role = event.target;
const newPlayer = new User(name,role);
User.allUsers.push(newPlayer);
};



// --------------------------------------------------------------------- Listeners ----------------------------------------------------------

// --------------------------------------------------------------------- Function Calls------------------------------------------------------



// ------------------------------------------------------- Chapter 1 ----------------------------------------------------------------------

let game = {
    path: 'Q1',
    Q1: {
      npc: 'this is the name of the npc',
      story: 'this is where the npc conveys their ',
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
  let questionContainer = document.getElementById('question-container');
  questionContainer.innerHTML = `
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


    // ----------------------------------------------------Function Calls-------------------------------------------------------------------

initialLoad();
