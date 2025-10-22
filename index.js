let h = 0
let g = 0
let score_h = document.getElementById("score1")
score_h.textContent= h
let score_g = document.getElementById("score2")
score_g.textContent= g
let scoreBoard_h = document.getElementById("scoreboard_h")
let scoreBoard_g = document.getElementById("scoreboard_g")

function addOne_H(){
    h+=1
    score_h.textContent= h
    if(h>g){
        scoreBoard_h.classList.add("winner")
        scoreBoard_g.classList.remove("winner")
    }
    else{
        scoreBoard_h.classList.remove("winner")
        scoreBoard_g.classList.add("winner")
    }
}

function addTwo_H(){
    h+=2
    score_h.textContent = h
    if(h>g){
        scoreBoard_h.classList.add("winner")
        scoreBoard_g.classList.remove("winner")
    }
    else{
        scoreBoard_g.classList.add("winner")
        scoreBoard_h.classList.remove("winner")
    }
}

function addThree_H(){
    h+=3
    score_h.textContent = h
    if(h>g){
        scoreBoard_h.classList.add("winner")
        scoreBoard_g.classList.remove("winner")
    }
    else{
        scoreBoard_g.classList.add("winner")
        scoreBoard_h.classList.remove("winner")
    }
}

function addOne_G(){
    g+=1
    score_g.textContent = g
    if(h>g){
        scoreBoard_h.classList.add("winner")
        scoreBoard_g.classList.remove("winner")
    }
    else{
        scoreBoard_g.classList.add("winner")
        scoreBoard_h.classList.remove("winner")
    }
}

function addTwo_G(){
    g+=2
    score_g.textContent = g
    if(h>g){
        scoreBoard_h.classList.add("winner")
        scoreBoard_g.classList.remove("winner")
    }
    else{
        scoreBoard_g.classList.add("winner")
        scoreBoard_h.classList.remove("winner")
    }
}

function addThree_G(){
    g+=3
    score_g.textContent = g
    if(h>g){
        scoreBoard_h.classList.add("winner")
        scoreBoard_g.classList.remove("winner")
    }
    else{
        scoreBoard_h.classList.remove("winner")
        scoreBoard_g.classList.add("winner")
    }
}

function new_game(){
    h = 0
    g = 0
    scoreBoard_h.classList.remove("winner")
    scoreBoard_g.classList.remove("winner")
    score_h.textContent = h
    score_g.textContent = g
    
}