//Handles Movement
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    console.log("UP")
  } else if (event.key === 'ArrowDown') {
    console.log("DOWN")
  } else if (event.key === 'ArrowLeft') {
    console.log("LEFT")
  } else if (event.key === 'ArrowRight') {
    console.log("RIGHT")
  }
});
//Handles Start Game
function startGame(){
  myGamePiece = new component(30, 30, "red", 10, 120);
  myGamePiece.gravity = 0.05;
  myScore = new component("30px", "Consolas", "black", 280, 40, "text");
  myGameArea.start();
}