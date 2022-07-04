let gamePattern = [];
let userPattern=[];
let level=0;
let started=false;
let buttonColours = ["green", "red", "yellow", "blue"];

$(document).keypress(function(){
  if(!started){
        $("h1").text("Level"+( level));
        nextSequence();
        started=true;
}
});
//will trigger when button is pressed
// while(gamePattern.length>=userPattern.length){
$("button").click(function(){
       UserButton=this.id;
      userPattern.push(UserButton);
    playSound(UserButton);
    animatePress(UserButton);
     checkAnswer(userPattern.length-1);
  });
// checkAnswer(userPattern.length);
  // let randomChosenColour;
  //function next function
function nextSequence() {
 userPattern=[];
    level++;
    $("h1").text("Level "+ (level));
  let randomNumber = Math.floor(Math.random() * 4);
 let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
// console.log(  $("#randomChosenColour"));
$("#"+ randomChosenColour).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);
}
//function play sound
function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
//function animate
function animatePress(currentColor){
$("#"+currentColor).addClass("pressed");

setTimeout(function () {
  $("#"+currentColor).removeClass("pressed");
}, 100);
}
function checkAnswer(num)
{
  // console.log("hurray");
 if(gamePattern[num]===userPattern[num])
{
  if(gamePattern.length===userPattern.length)
  {
    setTimeout(function () {
      nextSequence();
    }, 1000);
}
}
else
{
        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
    $("h1").text("Wrong ,Sorry Press a button to restart");
    startagain();
}}
function startagain() {
  level = 0;
  gamePattern = [];
  started = false;
}
