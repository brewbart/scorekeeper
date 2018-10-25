let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let h1 =document.querySelector("h1");
let showP1 = document.getElementById("showP1");
let showP2 = document.getElementById("showP2");
let reset = document.getElementById("reset");
setScore = document.getElementById("setScore");
let maxScore = document.getElementById("maxScore");
let p1Score = 0;
let p2Score = 0;
let gameOver = false;

console.log(maxScore);

p1.addEventListener("click", function(){
  p1Score++;
  if(!gameOver){
  showP1.textContent= p1Score;
    if(p1Score === Number(maxScore.textContent)){
      showP1.classList.add("winningColor")
      gameOver= true;
    }
  }
});

p2.addEventListener("click", function(){
  p2Score++;
  if(!gameOver){
  showP2.textContent= p2Score;
    if(p2Score === Number(maxScore.textContent)){
      showP2.classList.add("winningColor")
      gameOver= true;
    }
  }
});

reset.addEventListener("click", function(){
  gameOver = false;
  p1Score = 0;
  p2Score = 0;
  showP1.textContent= p1Score;
  showP2.textContent= p2Score;
  showP1.classList.remove("winningColor");
  showP2.classList.remove("winningColor");
});
 
setScore.addEventListener("keydown", function(e){
  if(e.keyCode===13) {
    maxScore.textContent = setScore.value;
  }
});
