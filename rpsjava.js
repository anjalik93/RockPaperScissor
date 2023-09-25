

    let game=1;
    let compScore=0;
    let userScore=0;
    let count=0;
    
        while(game)// && count<5)
        {
            /*-------------Call functions here--------------*/
            let compChoice= getComputerChoice();
            console.log('The computer choice is '+compChoice);
            let userChoice=getUserChoice();
            console.log('The user choice is '+userChoice);
            let winner = findWinner(compChoice,userChoice);
            displayResult(winner);
            
            // if(count<5) { 
            //     //game=askPlayAgain(1);
            // }
            // else{
            //     if(userScore>compScore)
            //     alert("Game Over! You win!");
            //     else if(userScore<compScore)
            //     alert("Game Over! Computer wins!");
            //     else if(userScore==compScore)
            //     alert("Game Over! The game is tied!")
            // }
              
        
            /*----------------Generate Computer Choice-------------------*/
            function getComputerChoice() {
                let choice=['rock','paper','scissor'];
                let a = Math.floor(Math.random()*choice.length)
                return choice[a];
            }                  
            
            /*----------------Intake User Choice-------------------*/ 
            function getUserChoice()    
            {
                let userChoice=prompt('Rock,paper,scissor - Enter your choice');
                userChoice=userChoice.toLowerCase();
                return(userChoice);
            }
            
            /*---------------- Find game winner-------------------*/ 
            function findWinner(compChoice,userChoice)
            {
                count++;
                if((compChoice=='rock' && userChoice=='scissor') || (compChoice=='paper' && userChoice=='rock') || (compChoice=='scissor' && userChoice=='paper'))
                 {
                    compScore++;
                    return('computer');
                 }
                if((userChoice=='rock' && compChoice=='scissor') || (userChoice=='paper' && compChoice=='rock') || (userChoice=='scissor' && compChoice=='paper'))
                 {
                    userScore++;
                    return('user');
                 }
                if((compChoice=='rock' && userChoice=='rock') || (compChoice=='paper' && userChoice=='paper') || (compChoice=='scissor' && userChoice=='scissor'))
                 return('tie');
                else
                return('invalid'); 

            }

            /*---------------- Output game result-------------------*/ 
            function displayResult(winner)
            {
                if (winner=='tie')
                console.log('It is a tie!');
                else if (winner=='computer')
                console.log(compChoice+' beats '+userChoice+'. Computer wins!');
                else if (winner=='user')
                console.log(userChoice+' beats '+compChoice+'. You win!');
                else
                console.log("Invalid user entry. Try again.")
            } 
            
            /*---------------- Ask to play again-------------------*/ 
                function askPlayAgain(flag)
                {             
                // let flag=1;
                let game=1;
                do{
                    let again=prompt('Do you want to play again (y/n)?');
                    if(again==null) return;
                    again=again.toLowerCase(); // does not work if again=null value is returned
                    // console.log(again);
        
                    if(again=='y')
                    {
                    game=1;
                    flag=0
                    }
                    else if(again=='n')
                    {
                    game=0;
                    alert('Game stopped!');
                    flag=0;
                    }
                    else
                    console.log('Invalid entry. Try again');
                
                } while(flag==1)
                return(game);
            }
        }
                
    
    