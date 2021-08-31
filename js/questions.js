// --------------------------------------------------------------------- On Page-Load ----------------------------------------------------------------------------

// On Page Load ('DOMContentLoaded') will create our 3 variables bellow and then load an eventlistener that awaits a 'click' on 'start game'. 
document.addEventListener('DOMContentLoaded', function() {
  let startButton = document.getElementById('startButton');
  let loadGame = document.getElementById('loadButton');
  let gameContainer = document.getElementById('question-container');
  let imageContainer = document.getElementById('npc-image');
  let adventureButton = document.getElementById('character-submit');

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
      <form>`;
    imageContainer.innerHTML = '<img src=img/traveler.jpeg>';
  });

});
//   loadGame.addEventListener('click' function() {})


// --------------------------------------------------------------------- Variables --------------------------------------------------------------------------------
User.allUsers = [];



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



// let story = {
//     currentQuestion: 'Question One',
//     question: {
//         currentQuestion: 'The Mysterious Figure',
//         story: 'this is question 1',
//         choices: [
//             {
//                 choice: 'a',
//                 choice: 'b',
//                 choice: 'c',
//                 choice: 'd',
//                 destination: 'questionTwo',
//             },
//         ]
//     }, 
//     questionTwo: {
//         currentQuestion: 'The Bartender',
//         story: 'this is question 2',
//         choices: [
//             {
//                 choice: 'a',
//                 choice: 'b',
//                 choice: 'c',
//                 choice: 'd',
//                 destination: 'questionThree',
//             },
//         ]
//     },
//     questionThree: {
//         currentQuestion: 'The Criminal',
//         story: 'this is question 3',
//         choices: [
//             {
//                 choice: 'a',
//                 choice: 'b',
//                 choice: 'c',
//                 choice: 'd',
//                 destination: 'questionFour',
//             },
//         ]
//     },
//     questionFour: {
//         currentQuestion: 'The Aquaintance',
//         story: 'this is question 4',
//         choices: [
//             {
//                 choice: 'a',
//                 choice: 'b',
//                 choice: 'c',
//                 choice: 'd',
//                 destination: 'questionFive',
//             },
//         ]
//     },
//     questionFive: {
//         currentQuestion: 'The Mysterious Figure Again',
//         story: 'this is question 5',
//         choices: [
//             {
//                 choice: 'a',
//                 choice: 'b',
//                 choice: 'c',
//                 choice: 'd',
//                 destination: 'endGame',
//             },
//         ]
//     },
//     endGame: {
//         currentQuestion: 'The Final Chapter',
//         story: 'this is the game end story',
//         // choices: [
//         //     {
//         //         choice: 'a',
//         //         choice: 'b',
//         //         choice: 'c',
//         //         choice: 'd',
//         //         destination: 'questionFour',
//     //         },
//     //     ]
//     // },
    
// }

// //DOMContentLoaded fires when the initial HTML doc has been completely loaded and parsed
// document.addEventListener('DOMContentLoaded', function () {
//     let button = document.getElementById('startButton')
//     let input = document.getElementById('nameInput')
//     let content = Document.getElementById('gameContainer')
//     button.addEventListener('click', renderQuestion)
    
//     function renderQuestion() {
//         content.innerHTML = `
//         <h1>${story[currentQuestion].title}</h1>
//         <p>${story[currentQuestion].story}</p>
//         ${getinputs()}
//         <button id = "submitButton">Submit</button
//         `
//         let buttonElem = document.getElementById('submitButton')
//         buttonElem.addEventListener('click', function() {

//         })
//     }

// function getInputValue() {
//     let inputs = document.getElementById('input[type = "radio"]')
//     for(let i = 0; i < inputs.length; i++ ) {
//         if(inputs[i].checked) {

//         };

// };

// function getInputs() {
//     let input = "";
//     for(let i = 0; i < story[currentQuestion].choices.length; i++) {
//         choices += `
//         <div>
//         <input id = "radio${i}" type = "radio" name = "choices"/>
//         <label for "radio${i}">${story[story.currentQuestion].choices[i].choice}</label>
//         </div>`
//      }
//      return input;
// }
