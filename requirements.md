Software Requirements

## What is the vision of this product?
To create a text-based trivia game designed to test the Users knowledge!

## What pain point does this project solve?

This project sets out to entertain the user by introducing them to a game with a unique story, unique characters and stimulating trivia questions tailored to their prefered play style (class selection).

## Why should we care about your product?
This product is a low stakes web application designed to entertain the user while creating a unique memorable experience based on their chosen play style. We offer multiple story lines and replayablility while allowing storage of user data as to foster "play-at-your-own-pace" functionallity. 

## Scope (In/Out)
IN - What will your product do

1. User will be able to input a unique userName and select a class from a list of 3. (Historian, Artist & Philosopher)
2. User will be given a select # of lives that will be updated upon failed questions. 
3. Uswer will have a unique "score" tracker that we will be calling the "Memory Tracker" that will keep track of the % of memory you have aqcuired based on correct answers.
4. Users will interact with the game by answering from a list of multiple choice questions, the answerrs to trivia questions.
5. The game will store userName, Class, Lives and memory in local storage to be retrived when the user returns. 


OUT - What will your product not do.

Our application will not store memory in an external Database.
Our application will only feature 3 unique classes & stories. 


Minimum Viable Product vs

What will your MVP functionality be?
At minimum our product will include the following:
1. Present the User with 5 Questions for each class.
2. Have a WIN and LOSE Mechanic setup
3. Have the ability to decrement user lives from 3 -> 0
4. have the ability to track user score from 0% -> 100%
5. Able to store UserName and Class of player in local storage. 

What are your stretch goals?

1. Unique styling for for each instance of our NPC interactions rather than one styling used across all 5. 
2. Unique styling on the Lives + Memory tracker
3. Alternate endings for each Class. 


What stretch goals are you going to aim for?

We are aiming to get multiple alternate endings per class and looking to have unique styling across each character instance. 

Functional Requirements
List the functionality of your product. This will consist of tasks such as the following:

An User can create and delete user accounts
User Can store Name and Class to retun later.
Player can pick-up from where they have left off. 
Player has lives that keep track of WIN/LOSE Mechanic. 
Player has the ability to keep track of score progression.
Player interacts with trivia questions presented in different instances. 


Data Flow

Describe the flow of data in your application. Write out what happens from the time the user begins using the app to the time the user is done with the app. Think about the “Happy Path” of the application. Describe through visuals and text what requests are made, and what data is processed, in addition to any other details about how the user moves through the site.

1. The user will input UserNAme and Class in the homepage. 
  - This data will be stored and retrieved in local storage upon page load. 
2. User will hit start and a function will run to generate a new overlay that displays to the user the "story"
3. User will then be presented with the "click" mechanic of our hooded figure acting as the key to progress to our next instance. 
4(a). User will be presented with the first instance of the game. 
        - level counter++ on page load.
  - Player will be presented with a trivia questions.
    - If Correct:
      - Score will incriment "20% memory regained"
      - lives will remain at current state.
      - level counter will remain at current state.
      - storeData(); will call and store the current instance of the player in local storage. 
    If Incorrect:
      - lives will decriment by 1 from current state.
      - function will run to check If() lives === 0. 
          -> If Lives === 0
              - Player will be given the end game prompt
              - player data will be removed.
              - user will be redirected to main page.
      - storeData(); will call and save the current instance of the player to local storage. 
      - Listener(event) will be waiting for click of "hooded igure" to redirect player to next page.
4(b). User will be presented with the second instance of the game. 
        - level counter++ on page load.
  - Player will be presented with a trivia questions.
    - If Correct:
      - Score will incriment "40% memory regained"
      - lives will remain at current state.
      - level counter will remain at current state.
      - storeData(); will call and store the current instance of the player in local storage. 
    If Incorrect:
      - lives will decriment by 1 from current state.
      - function will run to check If() lives === 0. 
          -> If Lives === 0
              - Player will be given the end game prompt
              - player data will be removed.
              - user will be redirected to main page.
      - storeData(); will call and save the current instance of the player to local storage. 
      - Listener(event) will be waiting for click of "hooded igure" to redirect player to next page.
4(c). User will be presented with the third instance of the game. 
        - level counter++ on page load.
  - Player will be presented with a trivia questions.
    - If Correct:
      - Score will incriment "60% memory regained"
      - lives will remain at current state.
      - level counter will remain at current state.
      - storeData(); will call and store the current instance of the player in local storage. 
    If Incorrect:
      - lives will decriment by 1 from current state.
      - function will run to check If() lives === 0. 
          -> If Lives === 0
              - Player will be given the end game prompt
              - player data will be removed.
              - user will be redirected to main page.
      - storeData(); will call and save the current instance of the player to local storage.
      - Listener(event) will be waiting for click of "hooded igure" to redirect player to next page.
4(d). User will be presented with the fourth instance of the game. 
        - level counter++ on page load.
  - Player will be presented with a trivia questions.
    - If Correct:
      - Score will incriment "80% memory regained"
      - lives will remain at current state.
      - level counter will remain at current state.
      - storeData(); will call and store the current instance of the player in local storage. 
    If Incorrect:
      - lives will decriment by 1 from current state.
      - function will run to check If() lives === 0. 
          -> If Lives === 0
              - Player will be given the end game prompt
              - player data will be removed.
              - user will be redirected to main page.
      - storeData(); will call and save the current instance of the player to local storage.
      - Listener(event) will be waiting for click of "hooded igure" to redirect player to next page.
4(e). User will be presented with the 5th instance of the game. 
        - level counter++ on page load.
  - Player will be presented with a final trivia questions.
    - If Correct:
      - Score will incriment "100% memory regained"
      - lives will remain at current state.
      - level counter will remain at current state.
      - storeData(); will call and store the current instance of the player in local storage. 
    If Incorrect:
      - lives will decriment by 1 from current state.
      - function will run to check If() lives === 0. 
          -> If Lives === 0
              - Player will be given the end game prompt
              - player data will be removed.
              - user will be redirected to main page.
      - storeData(); will call and save the current instance of the player to local storage.
      - Listener(event) will be waiting for click of "hooded igure" to redirect player to next page.
5. If player score > 0% && lives > 0:
    - Player will be presented with 1 of 3 endings based on class
    - lives will be reset to 3
    - memory will be reset to 0%
    - level counter will be reset to 0
    - player will be redirected to main page.
    - storeData(); will be called to store player data in local storage.
  If player lives === 0
    - player character will be removed from local storage.
    - player will be redirected to main page. 



