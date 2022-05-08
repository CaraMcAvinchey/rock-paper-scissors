// This game was built with the help of source code from Mehdi Aoussiad: https: //javascript.plainenglish.io/building-a-rock-paper-scissors-game-with-javascript-bce23d39509d

// Setting the scores and selecting the HTML elements.
let computerScore = 1;
let playerScore = 1;
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.selection button');
const showIcon = document.querySelector('.show i');
const computerShowIcon = document.querySelector('.computer i');

// The randomClass array below contains the rock, paper, scissors, lizard and spock icons from font-awesome.
const randomClasses = ["fas fa-hand-rock", "fas fa-hand-paper", "fas fa-hand-scissors", "fas fa-hand-lizard", "fas fa-hand-spock"];
const text = document.getElementById('demo');
const text2 = document.getElementById('demo2');

// The game functionality: setting forEach function for the buttons.
const game = () => {
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Random rock paper scissor for the computer and the player.
            let clickedBtn = e.target.className;
            showIcon.className = clickedBtn;
            let randomNum = Math.floor(Math.random() * randomClasses.length);
            computerShowIcon.className = randomClasses[randomNum];
            // Game Score.
            // If it's a tie then:
            if (showIcon.className === computerShowIcon.className) {
                pScore.innerHTML = pScore.innerHTML;
                cScore.innerHTML = cScore.innerHTML;
                text.innerHTML = "It's a Tie! ";
            }
            // Player rock beats computer scissors.
            else if (showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[2]) {
                pScore.innerHTML = playerScore;
                playerScore++;
                text.innerHTML = "You won! ";
             // Player rock loses to computer paper.   
            } else if (showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[1]) {
                cScore.innerHTML = computerScore;
                computerScore++;
                text.innerHTML = "You lost!";
            // Player paper loses to computer scissors. 
            } else if (showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[2]) {
                cScore.innerHTML = computerScore;
                computerScore++;
                text.innerHTML = "You lost ! ";
            // Player paper beats computer rock.   
            } else if (showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[0]) {
                pScore.innerHTML = playerScore;
                playerScore++;
                text.innerHTML = "It's a win! ";
            // Player scissors loses to computer rock.     
            } else if (showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[0]) {
                cScore.innerHTML = computerScore;
                computerScore++;
                text.innerHTML = "You lost! ";
             // Player scissors beats computer paper.  
            } else if (showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[1]) {
                pScore.innerHTML = playerScore;
                playerScore++;
                text.innerHTML = "It's a win! ";
            // Player rock beats computer lizard   
            } else if (showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[3]) {
                pScore.innerHTML = playerScore;
                playerScore++;
                text.innerHTML = "It's a win! ";
            // Player lizard loses to computer rock   
            } else if (showIcon.className === randomClasses[3] && computerShowIcon.className === randomClasses[0]) {
                cScore.innerHTML = computerScore;
                computerScore++;
                text.innerHTML = "You lost! ";
            // Player lizard beats computer spock    
            } else if (showIcon.className === randomClasses[3] && computerShowIcon.className === randomClasses[4]) {
                pScore.innerHTML = playerScore;
                playerScore++;
                text.innerHTML = "It's a win! ";
            // Player spock loses to computer lizard    
            }  else if (showIcon.className === randomClasses[4] && computerShowIcon.className === randomClasses[3]) {
                cScore.innerHTML = computerScore;
                computerScore++;
                text.innerHTML = "You lost! ";
            // Player spock beats computer scissors.    
            }  else if (showIcon.className === randomClasses[4] && computerShowIcon.className === randomClasses[2]) {
                pScore.innerHTML = playerScore;
                playerScore++;
                text.innerHTML = "It's a win! ";
            // Player scissors loses to computer spock.
            }   else if (showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[4]) {
                cScore.innerHTML = computerScore;
                computerScore++;
                text.innerHTML = "You lost! ";
            // Player scissors beats computer lizard. 
            }  else if (showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[3]) {
                pScore.innerHTML = playerScore;
                playerScore++;
                text.innerHTML = "It's a win! ";
            // Player lizard loses to computer scissors.    
            }   else if (showIcon.className === randomClasses[3] && computerShowIcon.className === randomClasses[2]) {
                cScore.innerHTML = computerScore;
                computerScore++;
                text.innerHTML = "You lost! ";
            // Player lizard beats computer paper.
            }  else if (showIcon.className === randomClasses[3] && computerShowIcon.className === randomClasses[1]) {
                pScore.innerHTML = playerScore;
                playerScore++;
                text.innerHTML = "It's a win! ";
            // Player paper loses to computer lizard.    
            }  else if (showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[3]) {
                cScore.innerHTML = computerScore;
                computerScore++;
                text.innerHTML = "You lost! ";
            // Player paper beats computer spock.        
            }  else if (showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[4]) {
                pScore.innerHTML = playerScore;
                playerScore++;
                text.innerHTML = "It's a win! ";
            // Player spock loses to computer paper.    
            }  else if (showIcon.className === randomClasses[4] && computerShowIcon.className === randomClasses[1]) {
                cScore.innerHTML = computerScore;
                computerScore++;
                text.innerHTML = "You lost! ";
            // Player spock beats computer rock.    
            }  else if (showIcon.className === randomClasses[4] && computerShowIcon.className === randomClasses[0]) {
                pScore.innerHTML = playerScore;
                playerScore++;
                text.innerHTML = "It's a win! ";
            // Player rock loses to computer spock.    
            }  else if (showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[4]) {
                cScore.innerHTML = computerScore;
                computerScore++;
                text.innerHTML = "You lost! ";
            }                   
        });
    });
}
// To call the function.
game();

/**
 * Function: hideShowSection
 * @param element_id - strirng of the id of the elemennt to hide/show
 * 
 * This function takes an id and looks to see if the class list has "hide" in it
 * and either removes it or adds that class to gtoggle on and off an element
 *  */ 

 function hideShowSection(element_id) {
    const sectionElement= document.getElementById(element_id);
    if (sectionElement.classList.contains('hide')) {
        sectionElement.classList.remove("hide");
    } else {
        sectionElement.classList.add("hide");
    }
  }

