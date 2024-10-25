document.getElementById('btnClick').onclick = () => {
/*------------------------------Gather Inputs from HTML------------------------------------*/
  let taxableIncome = parseFloat(document.getElementById("taxableIncome").value);
/*------------------------------------Handles Data Validation------------------------------------*/
  if(taxableIncome < 0){
    alert("Income must at least 0\nNegative numbers are not allowed")
  }
  else if (isNaN(taxableIncome)){
    alert("Please enter a number")
  }
  else{
    taxOwed = calculateIncomeTax(taxableIncome)
/*------------------------------------Inject Outputs into HTML------------------------------------*/
    document.getElementById("incomeTax").value = taxOwed;
  }
  document.getElementById('taxableIncome').focus();
};



/*------------------------------------Handles Calculations------------------------------------*/
function calculateIncomeTax(taxableIncome){
  /*----------------For Taxable Income over $0 but not over $9,875-----------------------*/
  if(taxableIncome > 0 && taxableIncome <= 9875){
    taxableIncome = 0 + ((taxableIncome - 0)/10)
    return taxableIncome.toFixed(2)
  }
  /*----------------For Taxable Income over $9,875 but not over $40,125------------------*/
  else if(taxableIncome > 9875 && taxableIncome <= 40125){
    taxableIncome = 987.50 + ((taxableIncome - 9875)*.12)
    return taxableIncome.toFixed(2)
  }
  /*----------------For Taxable Income over $40,125 but not over $85,525-----------------*/
  else if(taxableIncome > 40125 && taxableIncome <= 85525){
    taxableIncome = 4617.50 + ((taxableIncome - 40125)*.22)
    return taxableIncome.toFixed(2)
  }
  /*----------------For Taxable Income over $85,525 but not over $163,300----------------*/
  else if(taxableIncome > 85525 && taxableIncome <= 163300){
    taxableIncome = 14605.50 + ((taxableIncome - 85525)*.24)
    return taxableIncome.toFixed(2)
  }
  /*----------------For Taxable Income over $163,300 but not over $207,350---------------*/
  else if(taxableIncome > 163300 && taxableIncome <= 207350){
    taxableIncome = 33271.50 + ((taxableIncome - 163300)*.32)
    return taxableIncome.toFixed(2)
  }
  /*----------------For Taxable Income over $207,350 but not over $518,400---------------*/
  else if(taxableIncome > 207350 && taxableIncome <= 518400){
    taxableIncome = 47367.50 + ((taxableIncome - 207350)*.35)
    return taxableIncome.toFixed(2)
  }
  /*---------------------------For Taxable Income over $518,400--------------------------*/
  else{
    taxableIncome = 156235.00 + ((taxableIncome - 518400)*.37)
    return taxableIncome.toFixed(2)
  };
};
