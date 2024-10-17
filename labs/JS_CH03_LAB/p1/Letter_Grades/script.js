document.write(`<h1>Show Letter Grade</h1>`)
let grade = 0;
do{
  grade = parseInt(prompt("Enter a test score\nor enter 999 to end scores", "999"));
  //If/Else statement start
  //If grade is below 60
  if (grade < 60) {
    document.write(`<h3>Grade:${grade} = F </h3>`)

    //If grade is below 67 and above 60 
  } else if (grade <= 67 && grade >=60 ) {
      document.write(`<h3>Grade:${grade} = D </h3>`)
      
      //If grade is below 77 and above 68 
  } else if (grade <= 79 && grade >=68) {
    document.write(`<h3>Grade:${grade} = C </h3>`)
    
    //If grade is below 87 and above 60 
  } else if (grade <= 87 && grade >=80) {
    document.write(`<h3>Grade:${grade} = B </h3>`)
    
    //If grade is below 87 and above 60 
  } else if (grade <= 100 && grade >=88) {
    document.write(`<h3>Grade:${grade} = A </h3>`)
  };
}
  while(grade != 999);  
  
