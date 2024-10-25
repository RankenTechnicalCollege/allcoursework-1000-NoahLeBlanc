document.getElementById('btnClick').onclick = () => {
  /*------------------------------------Gather Inputs from HTML------------------------------------*/
  let subtotal = parseFloat(document.getElementById("subtotal").value);
  let taxRate = parseFloat(document.getElementById("taxRate").value);

  /*------------------------------------Logs input for debug---------------------------------------*/
  console.log(`subtotal: ${subtotal}`);
  console.log(`Tax Rate: ${taxRate}`);

  /*------------------------------------Handles Data Validation------------------------------------*/
  if(isNaN(subtotal) || isNaN(taxRate)){
    alert("Inputs must be numbers");
  }
  else if(subtotal <= 0 || taxRate <= 0){
    alert("Inputs must greater than 0");
  }
  /*------------------------------------Inject Outputs into HTML------------------------------------*/
  else{
    returnArray = calculateTax(subtotal, taxRate);
    console.log("Gathering Array Data")
    console.log("Retuning Array Values to Index page")
    document.getElementById("salesTax").value = returnArray[0];
    document.getElementById("total").value = returnArray[1];
  };
  /*-------------------------------Sets cursor back to the first text box---------------------------*/
  document.getElementById('subtotal').focus();
};

/*------------------------------------Creates function to call later---------------------------------*/
function calculateTax(subtotal, taxRate){/*Local Scope vars, won't cause issues for global scope vars*/
  /*Handles functions Data Validation*/
  if(subtotal < 0 && subtotal > 10000){
    alert("Subtotal must be > 0 and < 10000")
  }
  else if(taxRate < 0 && taxRate > 12){
    alert("Tax Rate must be Greater than 0\nand Less than 12")
  }
  /*Completes Function and returns Value*/
  else{
    console.log("Data Validation Success!\nStarting Calculation")
    taxRate = taxRate/100
    console.log(`TaxRate / 100 = ${taxRate}`)
    salesTax = subtotal * taxRate
    console.log(`subtotal * taxRate =  ${salesTax}(Unrounded)`)
    total = subtotal + salesTax
    console.log(`subtotal + SalesTax =  ${total}(Unrounded)`)
  };
  console.log("Calculations Complete\nRounding Output")
  salesTax = salesTax.toFixed(2)
  console.log(`salesTax Rounded to 2nd digit = ${salesTax}`)
  total = total.toFixed(2)
  console.log(`total Rounded to 2nd digit = ${total}`)
  let returnArray = [salesTax, total];
  return returnArray;
};

document.getElementById('resetClick').onclick = () => {
  document.getElementById('subtotal').focus();
}