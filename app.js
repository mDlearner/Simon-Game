let gameSelected = [];
let userSelected = [];
let btnColors = ["red","green","blue","purple"]
let gameScore = 0;
let level = 0;
let gameStarted = false;
let h3 = document.querySelector("h3");
let hS = document.querySelector("#hs");
let body = document.querySelector("body");
body.addEventListener("keypress", function () {
    if(gameStarted == false) {
        gameStarted = true;
        // console.log("Game started!");
        levelUp();
    }}
);
    function levelUp(){
        level++;
        h3.innerHTML = "Level " + level;
        let randIdx = Math.floor(Math.random() * 4);
        let color = btnColors[randIdx];
        let btnToFlash = document.querySelector(`.${color}`);
        gameSelected.push(color);
        // console.log(gameSelected);
        btnFlash(btnToFlash);
    }


    function btnFlash(btn) {
        btn.classList.add('flash')
        setTimeout(function () {
            btn.classList.remove('flash');
        }, 400);
    }

    let btns = document.querySelectorAll(".btn");
    for(btn of btns) {
        btn.addEventListener("click",btnPress);
    }
    function btnPress(){
        let btn = this;
        let userinp = btn.getAttribute("id");
        btnFlash(btn);
        userSelected.push(userinp);
        // console.log(userSelected);
        checkSequence(userSelected.length - 1);
    }
    function checkSequence(idx){
        if(userSelected[idx] == gameSelected[idx]) {
           if(userSelected.length == gameSelected.length) {
                userSelected = [];
                setTimeout(function () {
                    levelUp();
                }, 1000);
            }
        }
        else{
            h3.innerText = "Game Over! Press any key to restart!";
            hS.innerHTML = `Score: <b>${level}</b>`; 
            resetGame();
        }
    }
    function resetGame() {
        gameSelected = [];
        userSelected = [];
        level = 0;
        gameStarted = false;
        // h3.innerHTML = "Press any key to start!";
    }
    