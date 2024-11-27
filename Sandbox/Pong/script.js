document.addEventListener("DOMContentLoaded", () => {
  const $ = selector => document.querySelector(selector);
  /*-------------------------Gets the elements of the game-------------------*/
  let board = $("#board");
  let boardCord = board.getBoundingClientRect()
  //Handles Ball info
  let ball = $("#ball");
  let ballCord = ball.getBoundingClientRect()
  /*-----------------------------Handles Player info------------------------*/
  //p1 info
  let p1 = $("#paddle1");
  let p1Cord = p1.getBoundingClientRect()
  let p1Score = $("#player1Score");
  //p2 info
  let p2 = $("#paddle2");
  let p2Cord = p2.getBoundingClientRect()
  let p2Score = $("#player2Score");
  function moveBall(){
    console.log("Todo Make Ball move")
  }
});