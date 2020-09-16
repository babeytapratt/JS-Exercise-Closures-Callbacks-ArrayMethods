// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 *
 In counter1, the code will only display the text that is in function counter() because the return function is before the count increases. It needs to be after. It will simply return what was typed.
 *
 Counter2 will run because the count is declared in the global scope and then called in the function scope. The function scope takes the count declaration from the global scope and runs the function. Each time the function is run, it will hold the present value from the global level and add one to it on the function level.

 * 2. Which of the two uses a closure? How can you tell?

 Counter2 uses a closure because it takes the count declaration from the global scope into the function scope and closes the function then returning the new count to the global scope.
 *
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 *
 * If you declare the value of the function counter() in another part of the code, it would be a great way to use counter1
 *
 * counter2 could be used in a game scenario to keep track of points scored by individual teams or players.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();
console.log(counter1);
// counter2 code
let count = 0;

function counter2() {
  return count++;
}
console.log(counter2());
console.log(counter2());

/* Task 2: inning()

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */



function inning(){
  return Math.floor(Math.random() * 3);
}

console.log(inning());
/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example,

finalScore(inning, 9) might return:
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(inningCB, inningsNum){
  let homeScore = 0;
  let awayScore = 0;
  for(let i = 0; i < inningsNum; i++){
    homeScore = homeScore + inningCB();
    awayScore = awayScore + inningCB();
  }
  return{
    Home: homeScore,
    Away: awayScore
  }
}
console.log(finalScore(inning, 9));

/* Task 4:

Create a function called `scoreboard` that accepts the following parameters:

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */

function getInningScore(inningCB){
  return{
    Home: inningCB(),
    Away: inningCB()
  }
}
function scoreboard(inningScoreCB, inningCB, inningsNum) {
  const scoreByInning = [];
  let homeScore = 0;
  let awayScore = 0;
  for(let i = 0; i < inningsNum; i++){
    const currentInning = inningScoreCB(inningCB);
    homeScore = homeScore + currentInning.Home
    awayScore = awayScore + currentInning.Away
    scoreByInning.push(`Inning ${i + 1}: Away: ${currentInning.Away} - Home: ${currentInning.Home}`);
  }
  if(homeScore === awayScore){
    scoreByInning.push(`you will need to play another inning`);
  }else{
    scoreByInning.push(`Final Score: Away: ${awayScore} - Home: ${homeScore}`);
  }
  return scoreByInning;
}
console.log(scoreboard(getInningScore, inning, 9));


// inningScoreCB(
