document.getElementById('verify').onclick = () => {
  /*------------------------------------Gather Inputs from HTML------------------------------------*/
  const userAge = parseFloat(document.getElementById("userAge").value);
  /*------------------------------------Handles Data Validation------------------------------------*/
  if(userAge < 21 && userAge >= 1 ){
    alert("You're not old enough!")
  }
  else if(isNaN(userAge)){
    alert("Please enter your age!")
  }
  else if(1 > userAge){
    alert("Age out of range!")
  }
  else if(userAge > 200){
      alert("Age out of range!")
  }
  else if(userAge >= 21){
    alert("Welcome to the venue!")
  }
}