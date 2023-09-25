

let winner='';
let compScore=0;
let userScore=0;
let game=1;



const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');

const result=document.querySelector('.result');
const content = document.createElement('div')
const finalResult=document.createElement('div');

function gameStart(userChoice){
    if (compScore<5 && userScore<5){
        computerChoice=getComputerChoice();
        console.log('The computer choice is '+computerChoice);
        winner=findWinner(computerChoice,userChoice);
        scoreCount(winner);
        console.log(winner);
        content.textContent="User score:"+userScore+" \r  Computer score:"+ compScore;
        result.appendChild(content);
    }
    else{
        if(userScore<compScore){
        finalResult.textContent="Game Over. Computer wins!!";
        }
        else if(userScore>compScore){
        finalResult.textContent="Game Over. User wins!!";
        }
        else if(userScore==compScore){
        finalResult.textcontent="Game Over. It's a tie!!";    
        }
        finalResult.textContent +="Refresh the page to play again!"
        result.appendChild(finalResult);
        game=0;

    }

}



rock.addEventListener('click', () => {
    userChoice='rock';
    if(game){
    gameStart(userChoice);
    }
  });

  paper.addEventListener('click', () => {
    userChoice='paper';
    if(game){
        gameStart(userChoice);
        }
    
  });

  scissor.addEventListener('click', () => {
    userChoice='scissor';
    if(game){
        gameStart(userChoice);
        }

  });
 

   /*----------------Generate Computer Choice-------------------*/
   function getComputerChoice() {
    let choice=['rock','paper','scissor'];
    let a = Math.floor(Math.random()*choice.length)
    return choice[a];
    }
    
    /*---------------- Find game winner-------------------*/ 
    function findWinner(compChoice,userChoice)
    {
       
        if((compChoice=='rock' && userChoice=='scissor') || (compChoice=='paper' && userChoice=='rock') || (compChoice=='scissor' && userChoice=='paper'))
         {
            // compScore++;
            return('computer');
         }
        if((userChoice=='rock' && compChoice=='scissor') || (userChoice=='paper' && compChoice=='rock') || (userChoice=='scissor' && compChoice=='paper'))
         {
            // userScore++;
            return('user');
         }
        if((compChoice=='rock' && userChoice=='rock') || (compChoice=='paper' && userChoice=='paper') || (compChoice=='scissor' && userChoice=='scissor'))
         return('tie');
        else
        return('invalid'); 

    }

    function scoreCount(winner)
    {
        if(winner=='computer'){
            compScore++;            
        }
        else if(winner=='user'){
            userScore++;
        }
        else if(winner=='tie')
        return;
    }

    