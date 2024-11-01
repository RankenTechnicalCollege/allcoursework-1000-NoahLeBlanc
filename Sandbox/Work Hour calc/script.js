document.getElementById('btclck').onclick = () => {
  /*------------------------------------Logs input for debug---------------------------------------*/
  const days = document.querySelectorAll("input[class='days']");
  const perHour = document.getElementById("perHour").value;
  /*------------------------------------Adds Key value pair values together------------------------*/
  let hoursWorked = 0;
  //Loop through each input to get the value
  days.forEach(input => {
    const value = parseFloat(input.value) || 0;
    hoursWorked += value;
  });
  /*------------------------------------Inject Outputs into HTML------------------------------------*/
  document.getElementById('output').value = `$${calculate(hoursWorked, perHour).toFixed(2)}`;
}
/*------------------------------------Function Calculates output---------------------------------*/
function calculate(h, $){
  cashEarned =  h * $
  return cashEarned
}