document.getElementById('btnClick').onclick = () => {
  /*Get the values from the HTML*/
  let milesDriven = parseFloat(document.getElementById("milesDriven").value);
  let gallonsUsed = parseFloat(document.getElementById("gallonsUsed").value);
  /*Handles User mistakes*/
  if (gallonsUsed <= 0 && milesDriven <= 0){
    alert("Miles driven & Gallons Used must be greater than zero ")
    }
    else if(milesDriven <= 0){
      alert("Miles driven must be greater than zero ")
    }
    else if(gallonsUsed <= 0){
      alert("Gallons Used must be greater than zero")
    }
    else if(isNaN(milesDriven)){
      alert("Please enter a number into the Miles Driven text box")
    }
    else if(isNaN(gallonsUsed)){
      alert("Please enter a number into the Gallons Used text Box")
    }
    else{
      /*If No Errors, Executes function using prev vars in place of params md and gu*/
      output = mpg(milesDriven, gallonsUsed)
    };
  /*Outputs value to HTML with id of "mpg"*/
  document.getElementById("mpg").value = output;
};
/*MPG calculator function for use whenever lol*/
function mpg(md, gu){
  let output = 0;
  output = md/gu;
  return output
}