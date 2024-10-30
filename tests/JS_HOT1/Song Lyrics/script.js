document.getElementById('enter').onclick = () => {
  /*------------------------------------Gather Inputs from HTML------------------------------------*/
  const oneAndThree = parseFloat(document.getElementById("oneAndThree").value);
  /*------------------------------------Handles Data Validation------------------------------------*/
  if(oneAndThree == 1){
    alert("One is the loneliest number that you'll ever do.")
  }
  else if(oneAndThree == 2){
    alert("Two can be as bad as one. It's the loneliest number since the number one.")
  }
  else if(oneAndThree == 3){
    alert("There is no three.")
  }
  else if(isNaN(oneAndThree)){
    alert("Please enter a number, not a word.")
  }
  else{
    alert("You didn't enter a valid number.")
  }
}