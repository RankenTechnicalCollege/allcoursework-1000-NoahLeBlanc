document.write(`<h1>The Test Scores App</h1>`)
const scores = [];//This is a const array but the value is mutable still

let score = 0;
do{
  score = parseInt(prompt("Enter a test score, or enter 01 to end scores", -1));
  //If/Else statement start
  if(score >= 0 && score <= 100){ /*of score is Greater than or equal to 0 and score is less than or eqaul to 100*/
    scores[scores.length] = score; //array scores length is = to score
  }
  else if (score != -1){
    alert("Score must be a value number from 0 through 100");
  }
}
while(score != -1);
//==============================================================================================
  if(scores.length > 0){
    //use a for-in loop to add each score to total and display it
    let total = 0;
    for(let i in scores){
      total = total + scores[i];
      document.write(`<p>Score ${parseInt(i) +1}: ${scores[i]}</p>`);
    }
    //calculate and display the average
    const average = parseInt(total/scores.length);
    document.write(`<p>Average score is ${average}</p>`);
  }