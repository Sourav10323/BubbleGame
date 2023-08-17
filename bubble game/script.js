// make bubble function goes here -----

function makeBubble(){

    var clutter="";
for(var i=1;i<=104;i++){
    var x = Math.floor(Math.random()*10);
    clutter = clutter+ `<div class="bubble">${x}</div>`;
}

document.querySelector(".lower").innerHTML = clutter;

}

// run timer function goes here  ------

var timer =60;
function runTimer(){
    
     var timerInt = setInterval(function () {
     if(timer>0){
        timer--;
        document.querySelector(".timer").innerHTML = timer;
     }
     else{
        clearInterval(timerInt)
        document.querySelector(".lower").innerHTML = `<h1>GAME OVER YOU SCORED : ${sq}</h1>`
     }
    }, 1000);

}

// hit function goes here -------
var ht = 0;
function getHit(){
    ht = Math.floor(Math.random()*10);
     document.querySelector(".hit").textContent = ht;
   
}


// score funcytion goes here -----

var sq = 0;
function getScore(){

   
   sq = sq+10;
   document.querySelector(".score").innerHTML = sq;

}


// function for target which needs to be selected 
var cl = 0;
document.querySelector(".lower").addEventListener("click",function(details){
   var cl = Number(details.target.textContent);

   if(ht === cl){
    getScore();
    getHit();
    makeBubble();
}


})



makeBubble();
runTimer();
getHit();

