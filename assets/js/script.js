// This game was built using code from Mehdi Aoussiad from: https: //javascript.plainenglish.io/building-a-rock-paper-scissors-game-with-javascript-bce23d39509d

// Setting the scores and selecting our HTML elements.
let computerScore = 1;
let playerScore = 1;
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.selection button');
const showIcon = document.querySelector('.show i');
const computerShowIcon = document.querySelector('.computer i');

// The randomClass array below this contains the rock,paper, and scissor Icon from font-awesome.
const randomClasses = ["fas fa-hand-rock", "fas fa-hand-paper", "fas fa-hand-scissors", "fas fa-hand-lizard", "fas fa-hand-spock"];
const text = document.getElementById('demo');
const text2 = document.getElementById('demo2');
