document.getElementById('btnClick').onclick = () => {
  /*------------------------------Gather Inputs from HTML------------------------------------*/
  let amountOfChange = parseFloat(document.getElementById("amountOfChange").value);
  /*------------------------------------Handles Data Validation------------------------------------*/
  if(amountOfChange <= 0 || amountOfChange > 99){
    alert("Please enter an amount between 0 and 99")
  }
  else if (isNaN(amountOfChange)){
    alert("Please enter a number")
  }
  else{
    console.log(`Amount of Change user entered is:${amountOfChange}`)
    pocketChange = makeChange(amountOfChange)
  };
  /*------------------------------------Inject Outputs into HTML------------------------------------*/
  document.getElementById("quarters").value = pocketChange[0];
  document.getElementById("dimes").value = pocketChange[1];
  document.getElementById("nickels").value = pocketChange[2];
  document.getElementById("pennies").value = pocketChange[3];

  
};
/*------------------------------------Handles Calculations------------------------------------*/
function makeChange(change){
  quarters = change / 25;
  quarters = Math.floor(quarters)
  console.log(`Amount of Quarters: ${quarters}`);
  change = change % 25;

  dimes = change / 10;
  dimes = Math.floor(dimes)
  console.log(`Amount of Dimes: ${dimes}`);
  change = change % 10;

  nickels = change/5;
  nickels = Math.floor(nickels)
  change = change % 5;
  console.log(`Amount of Nickels: ${nickels}`);

  pennies = change/1;
  pennies = Math.floor(pennies)
  console.log(`Amount of Pennies: ${pennies}`);
  pocketChange = [quarters, dimes, nickels, pennies];
  return pocketChange;
};