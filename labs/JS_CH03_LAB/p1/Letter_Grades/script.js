document.write(`<h1>The Show Letter Grade</h1>`)
const scores = [];//This is a const array but the value is mutable still

let score = 0;
do{
  score = parseInt(prompt("Enter a test score, or enter 999 to end scores", 999));
  //If/Else statement start
  if(score >= 0 && score <= 100){ /*of score is Greater than or equal to 0 and score is less than or eqaul to 100*/
    scores[scores.length] = score; //array scores length is = to score
  }
  else if (score != 999){
    alert("Score must be a value number from 0 through 100");
  }
}
while(score != 999);
  if (grade < 60) {
    document.write(`<p>Grade:${grade} = F </p>`)
} else if (grade < 70) {
    document.write(`<p>Grade:${grade} = D </p>`)
} else if (grade < 80) {
  document.write(`<p>Grade:${grade} = C </p>`)
} else if (grade < 90) {
  document.write(`<p>Grade:${grade} = B </p>`)
} else if (grade < 100) {
  document.write(`<p>Grade:${grade} = A </p>`)
}
