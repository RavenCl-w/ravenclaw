let story = {
    currentQuestion: 'Question One',
    question: {
        currentQuestion: 'The Mysterious Figure',
        story: 'this is question 1',
        choices: [
            {
                choice: 'a',
                choice: 'b',
                choice: 'c',
                choice: 'd',
                destination: 'questionTwo',
            },
        ]
    }, 
    questionTwo: {
        currentQuestion: 'The Bartender',
        story: 'this is question 2',
        choices: [
            {
                choice: 'a',
                choice: 'b',
                choice: 'c',
                choice: 'd',
                destination: 'questionThree',
            },
        ]
    },
    questionThree: {
        currentQuestion: 'The Criminal',
        story: 'this is question 3',
        choices: [
            {
                choice: 'a',
                choice: 'b',
                choice: 'c',
                choice: 'd',
                destination: 'questionFour',
            },
        ]
    },
    questionFour: {
        currentQuestion: 'The Aquaintance',
        story: 'this is question 4',
        choices: [
            {
                choice: 'a',
                choice: 'b',
                choice: 'c',
                choice: 'd',
                destination: 'questionFive',
            },
        ]
    },
    questionFive: {
        currentQuestion: 'The Mysterious Figure Again',
        story: 'this is question 5',
        choices: [
            {
                choice: 'a',
                choice: 'b',
                choice: 'c',
                choice: 'd',
                destination: 'endGame',
            },
        ]
    },
    endGame: {
        currentQuestion: 'The Final Chapter',
        story: 'this is the game end story',
        // choices: [
        //     {
        //         choice: 'a',
        //         choice: 'b',
        //         choice: 'c',
        //         choice: 'd',
        //         destination: 'questionFour',
    //         },
    //     ]
    // },
    
}

//DOMContentLoaded fires when the initial HTML doc has been completely loaded and parsed
document.addEventListener('DOMContentLoaded', function () {
    let button = document.getElementById('startButton')
    let input = document.getElementById('nameInput')
    let content = Document.getElementById('gameContainer')
    button.addEventListener('click', renderQuestion)
    
    function renderQuestion() {
        content.innerHTML = `
        <h1>${story[currentQuestion].title}</h1>
        <p>${story[currentQuestion].story}</p>
        ${getinputs()}
        <button id = "submitButton">Submit</button
        `
        let buttonElem = document.getElementById('submitButton')
        buttonElem.addEventListener('click', function() {

        })
    }

function getInputValue() {
    let inputs = document.getElementById('input[type = "radio"]')
    for(let i = 0; i < inputs.length; i++ ) {
        if(inputs[i].checked)
    }

}

function getInputs() {
    let input = "";
    for(let i = 0; i < story[currentQuestion].choices.length; i++) {
        choices += `
        <div>
        <input id = "radio${i}" type = "radio" name = "choices"/>
        <label for "radio${i}">${story[story.currentQuestion].choices[i].choice}</label>
        </div>`
     }
     return input;
}
