                //    global variables
let introScreen
let let newGameButtonElem 
let loadGameButtonElem



//creating button to start the game
function startGameButton() {
    //need form to input user name/class
    //maybe put form div in html then:
    let fieldsetElem = document.createElement('fieldset');
    //whatever the div is then:
    .appendChild(fieldsetElem);
    let legendElem = document.createElement('legend');
    legendElem.textContent = 'what is your name?'
    fieldsetElem.appendChild(legendElem);


    let startTheGameButton = document.createElement('button');
}

//starting the game
function startGame() {

}

//function to load game
function loadGame(event) {

}

//function reset the game
function resetGame() {

}

//function for saving game
function saveGame() {

}

//function to create a user
const User = function(name, class) {
    this.name = name;
    this.clas = class;
}

let currentUser = new User(name, class)

//function to add avatar
const UserCharacter = function(img, class) {
    img.src = img;
    this.class = class
}


// local storage to save game and user info


//function for creating next question/npc and background image
function nextQuestion(npcName, npcBackgroundImage) {

    this.characterName = npcName;
    this.npcBackgroundImage = npcBackgroundImage
}

// function for adding next question to page
function renderQuestions() {

let questionOne = '';

let questionTwo = '';

let questionThree = '';

let questionFour = '';

let questionFive = '';

}


