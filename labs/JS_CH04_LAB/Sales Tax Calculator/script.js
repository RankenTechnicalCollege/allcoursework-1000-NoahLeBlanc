document.getElementById('btnClick').onclick = () => {
  /*------------------------------------Gather Inputs from HTML------------------------------------*/
  let subtotal = parseFloat(document.getElementById("subtotal").value);
  let taxRate = parseFloat(document.getElementById("taxRate").value);

  /*------------------------------------Logs input for debug---------------------------------------*/
  console.log(subtotal);
  console.log(taxRate);

  /*------------------------------------Handles Data Validation------------------------------------*/
  if(isNaN(subtotal) || isNaN(taxRate)){
    alert("Inputs must be numbers")
  }
  else if(subtotal <= 0 || taxRate <= 0){
    alert("Inputs must greater than 0")
  }

  /*------------------------------------Inject Outputs into HTML------------------------------------*/
  calculateTax(subtotal, taxRate)
  document.getElementById("salesTax").value = salesTax;
  document.getElementById("total").value = total;

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
  };
  /*Completes Function and returns Value*/
};

