let yourMove='';
let result='';
let intervalID;
let isautoplaying=false;
let score=JSON.parse(localStorage.getItem('score'))||{
 wins:0,
 loses:0,
 ties:0
};
updateScore();
result_js();
function updateScore(){
 document.querySelector('.js-score').innerHTML= `WINS=${score.wins},LOSES=${score.loses},TIES=${score.ties}`;
}
function result_js(){
 document.querySelector('.js-result').innerHTML=`RESULT:${result}`;
}
function moves()
{
 document.querySelector('.js-moves').innerHTML=`YOU PICKED:${yourMove} & COMPUTER PICKED:${compMove}`;
}
 function pickCompMove()
 {
     let num=Math.random();
     if(0<num&&num<1/3)
     compMove='ROCK';
     else if (1/3<num&&num<2/3)
     compMove='PAPER';
     else if(2/3<num&&num<1)
     compMove='SCISSORS';
 return compMove;
 }
 function result_display(result){
     if (result==='YOU WIN')
         score.wins+=1;
     else if(result==='YOU LOSE')
         score.loses+=1;
     else if(result==='TIE')
         score.ties+=1;
         localStorage.setItem('score',JSON.stringify(score));
         updateScore();
         result_js();
         moves();
 }


function autoplay() {
    
  if (!isautoplaying) {
    intervalID = setInterval(function () {
      yourMove = pickCompMove();
      playGame(yourMove);
    }, 100); 
    isautoplaying = true;
  } 
    else {
    clearInterval(intervalID);
    isautoplaying = false;
  }
}

function playGame(yourMove){
    if(yourMove==='ROCK'){
    compMove=pickCompMove();
    if(compMove==='ROCK')
    result='TIE';
    else if(compMove==='PAPER')
    result='YOU LOSE';
    else if(compMove==='SCISSORS')
    result='YOU WIN';
    result_display(result);
    }
   else if (yourMove==='PAPER'){
       compMove=pickCompMove();
    if(compMove==='ROCK')
    result='YOU WIN';
    else if(compMove==='PAPER')
    result='TIE';
    else if(compMove==='SCISSORS')
    result='YOU LOSE';
    result_display(result);
   }  
    else if(yourMove==='SCISSORS'){
        compMove=pickCompMove();
    if(compMove==='ROCK')
    result='YOU LOSE';
    else if(compMove==='PAPER')
    result='YOU WIN';
    else if(compMove==='SCISSORS')
    result='TIE';
    result_display(result);
    }
}