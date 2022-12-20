
const p1={
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2={
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton=document.querySelector('#reset');
const Playto= document.querySelector('#playto');

let winningscore=3;
let gameover=false;

function updatescore(player,opponent){
    if(!gameover){
        player.score +=1;
        if(player.score===winningscore){
            gameover=true;
            player.display.classList.add('winner');
            opponent.dispaly.classList.add('loser');
        }
        player.dispaly.textContent=player.score;
    }
}

p1.button.addEventListener('click', function(){
    if(!gameover){
        p1.score+=1;
        if(p1.score===winningscore){
            gameover=true;
            p1.display.classList.add('winner');
            p2.display.classList.add('loser');
        }
        p1.display.textContent=p1.score;
    }
})

p2.button.addEventListener('click', function(){
    if(!gameover){
        p2.score+=1;
        if(p2.score===winningscore){
            gameover=true;
            p2.display.classList.add('winner');
            p1.display.classList.add('loser');
        }
        p2.display.textContent=p2.score;
    }   
})

Playto.addEventListener('change',function(){
    winningscore =parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset(){
    gameover=false;
    p1.score=0;
    p2.score=0;
    p1.display.textContent=0;
    p2.display.textContent=0;
    p2.display.classList.remove('winner','loser');
    p1.display.classList.remove('winner','loser');
}
