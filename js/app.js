'use strict'


// Everything in here as of 8.30.21 is not being utilized in any files. As of right now this is a reference page for possible functions down the road. 

//creating button to start the game
// function startGameButton() {
//     //need form to input user name/class
//     //maybe put form div in html then:
//     let fieldsetElem = document.createElement('fieldset');
//     //whatever the div is then:
//     .appendChild(fieldsetElem);
//     let legendElem = document.createElement('legend');
//     legendElem.textContent = 'what is your name?'
//     fieldsetElem.appendChild(legendElem);


//     let startTheGameButton = document.createElement('button');
// }



// console.log('Do you remember?');

// // ----------------------------------------------------------global variables ---------------------------------------------------------------
// let introScreen = document.getElementById('homeScreen');
// let newGameButtonElem  = document.getElementById('newGameButton');
// let submitAnswerButtonElem = document.getElementById('submitAnswerButton');
// let loadGameButtonElem

// let pElem = document.getElementById('storyP')
// let formSectionElem = document.getElementById('formSection')

// let currentQuestion = 0;

// // ----------------------------------------------------------Constructors ---------------------------------------------------------------
// function User(name, role) {
//     this.name = name;
//     this.role = role;
//     this.lives = 3;
//     this.curentQuestion = [];
//    }

// let currentUser = new User(name, role)

// // function for adding next question to page
// function renderQuestions() {

//     let questionOne = '';
    
//     let questionTwo = '';
    
//     let questionThree = '';
    
//     let questionFour = '';
    
//     let questionFive = '';
    
//     }


// // ----------------------------------------------------------Functions ---------------------------------------------------------------
// //function to create a user

// //function for creating next question/npc and background image
// function nextQuestion(npcName, npcBackgroundImage) {

//     this.characterName = npcName;
//     this.npcBackgroundImage = npcBackgroundImage
//    }
   
// function User(name, role) {
//     this.name = name;
//     this.role = role;
//     this.lives = 3;
//     this.curentQuestion = [];
//    }
   
   
//    //Story/Lore constructor function
//    function Story(backgroundImage) {
//     this.backgroundImage = backgroundImage;
//    }
   
//    //Question constructor function
//    function Question(questionNumber) {
//     this.questionNumber = questionNumber
//     this.questionIndex = 0;
//     this.questionsArray = [];
//    }
   
//    Question.prototype.addQuestion = function(text) {
//     this.questionsArray.push(text)
//    }
   
//    function addQuestion() {
   
//    }
   
//    function renderQuestion() {
//     let firstQuestion = []
//     let secondQuestion = []
//     let thirdQuestion = []
//     let fourthQuestion = []
//     let fifthQuestion = []
//    }
   
//    function startGameButton() {

// }

// //starting the game
// function startGame() {

// }

// //function to load game
// function loadGame(event) {

// }

// //function reset the game
// function resetGame() {

// }

// //function for saving game
// function saveGame() {

// }

// // local storage to save game and user info
// function storeUserData() {
//     const stringifiedUser = JSON.stringify(User.allusers);
//     localStorage.setItem('usersInStorage', stringifiedUser)
//    }
   
//    function getUserFromStorage() {
//     const stringifiedUser = localStorage.getItem('usersInStorage')
//     if(usersInStorage) {
//         const parsedUsers = JSON.parse(stringifiedUsers)
//         for(let user of parsedUsers) {
//             const currentUserName = user.name
//             for(let originalUser of User.allUsers) {
//                 const originalUser = originalUser.name
//                 if(currentUserName === originalUser) 
//                 originalUser.name = user.name;
//                 originalUser.role = user.role;
//                 originalUser.lives = user.lives;
//             }
//         }
//     }
//    }


// // ----------------------------------------------------------Prototypes---------------------------------------------------------------
// Question.prototype.getNextQuestion = function() {  
// }


// ----------------------------------------------------------Listeners ---------------------------------------------------------------





