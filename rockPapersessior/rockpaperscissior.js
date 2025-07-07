let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msgPara = document.querySelector("#msg");


const genCompChoice =()=>{
    const options = ["rock","paper","scissors"];
   const randomIndx= Math.floor(Math.random()*3);
    return options[randomIndx];
}

  const drawGame=()=>{
      console.log("game was draw...!"); 
  }

  const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("you are win the game...!");  
        msg.innerText = `you win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"; 
    }
    else{
        console.log("you lose the game...!");  
        msg.innerText =  `you lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red"; 
    }
  }
//this is useChoice is genrated
const playGame = (userChoice) => {
 console.log("your choice=",userChoice);
  //comp choices generated
  const compChoice = genCompChoice();
  console.log("comp choice=",compChoice);

  if(userChoice===compChoice){
    drawGame();
  }
  else{
    let userWin=true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
  }
  
}

//to check which choice is clicked
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
          playGame(userChoice);
    })
})