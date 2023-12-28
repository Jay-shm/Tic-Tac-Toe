const boxes = document.querySelectorAll(".box");
const newGame = document.querySelector("#newg");
const wincell = document.querySelector(".win");
const winner = document.querySelector(".winner");

let turnO = true;

let winPattern =[
    [0 ,1 ,2],
    [0 ,3 ,6],
    [0 ,4 ,8],
    [1 ,4 ,7],
    [2 ,5 ,8],
    [2 ,4 ,6],
    [3 ,4 ,5],
    [6 ,7 ,8],
];


boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("Button Clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const checkWinner = () =>{
    for(let pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                winnerf(pos1val);
            }
        }
    }
}


const disabledboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


const winnerf = (win) => {
    console.log("Winner function called");
    winner.innerText = `${win} Is The Winner`;
    wincell.classList.remove("hide");
    wincell.classList.add("show", "fadeIn");
    disabledboxes();
}

const fnewgame = () => {
    turnO = true;
    enableboxes();
    wincell.classList.remove("show");
    wincell.classList.add("hide");
}


newGame.addEventListener("click",fnewgame);