let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameButton = document.querySelector("#new-btn");
let msgConatainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;  //turnX or turnY

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgConatainer.classList.add("hide");
}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box clicked");
        if (turnO) {
            box.innerHTML = "O";
            turnO = false;
        }
        else {
            box.innerHTML = "X";
            turnO = true
        }
        box.disabled = true;

        checkWinner();
    })
})

const showWinner = (winner) => {
    // debugger;
    msg.innerText = `Congratulations winner is ${winner}`;
    msgConatainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for (pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner...!", pos1Val);
                showWinner(pos1Val);
            }

        }
    }
}

 newGameButton.addEventListener("click",resetGame);
 resetbtn.addEventListener("click",resetGame);




