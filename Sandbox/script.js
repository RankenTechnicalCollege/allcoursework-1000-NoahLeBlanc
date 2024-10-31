document.getElementById('btclck').onclick = () => {
  const inputs = document.querySelectorAll("input[type='number']");
  let hoursWorked = 0;

  //Loop through each input to get the value
  inputs.forEach(input => {
    const value = parseFloat(input.value) || 0;
    hoursWorked += value;
  });

  //const hoursWorked = document.querySelectorAll("input").value; 
  console.log(hoursWorked);
  document.getElementById('output').value = hoursWorked;
}