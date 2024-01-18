var items = ["◼️","📄","✂️"]
var computerItem
var computerItemScore = 0
var playerItem 
var playerItemScore = 0

function testPlayerItemIsnotNull() {
 var playerTurn = prompt("Enter shape");
 if (playerTurn!= null) {
  playerItem = playerTurn
 return testIfRightInput()
  }
}

function testIfRightInput(){
 if(items.some((x)=>playerItem == x)){
  testIfRockPapperScissor();
  testLevelNumber();
 }else{
  alert("Enter right items")
  }
}

function changeRandomComputerItem(){
 computerItem = items[Math.floor(Math.random() *3)]
 return computerItem
}

function testIfRockPapperScissor(){ 
 changeRandomComputerItem()
 if(computerItem === playerItem){
  this.computerItemScore
  this.playerItemScore
 }else 
 switch(true){
 case 
 computerItem == items[0] && playerItem == items[2]:
 computerItemScore++
 break
 case
 computerItem == items[2] && playerItem == items[1]:
 computerItemScore++ 
 break
 case 
 computerItem == items[1] && playerItem == items[0]:
 computerItemScore++
 break
 default:
 playerItemScore++
 }
 return console.log(computerItem,"computer score",computerItemScore," ",playerItem,"your score",playerItemScore)

}

var winner
function testLevelNumber(){
 if ((playerItemScore == 3)||                                                                                                                           (computerItemScore == 3)){
  testWinner()
 return console.log(winner,"win")
 }else{
 testPlayerItemIsnotNull();
 }
}

function testWinner(){
 if(playerItemScore == 3){
  winner = "you have 3 score you"
  }else{
  winner = "computer has 3 score computer"
  }
}

testPlayerItemIsnotNull()
