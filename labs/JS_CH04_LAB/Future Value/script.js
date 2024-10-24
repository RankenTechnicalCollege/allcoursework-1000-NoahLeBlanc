document.getElementById('btnClick').onclick = () => {
  /*Declares Vars the stores HTML values*/ 
  let totalInvestment = parseFloat(document.getElementById("totalInvestment").value);
  console.log(totalInvestment)
  let annualInterestRate = parseFloat(document.getElementById("annualInterestRate").value);
  console.log(annualInterestRate)
  let numOfYears = parseFloat(document.getElementById("numOfYears").value);
  console.log(numOfYears)

  /*Handles Broad Errors*/
  if(totalInvestment <= 0 || annualInterestRate <= 0 || numOfYears <= 0){
    alert("Inputs needs to be greater than 0");
  }
  else if(isNaN(totalInvestment) || isNaN(annualInterestRate) || isNaN(numOfYears)){
    alert("Inputs needs to be a number");
  }

  /*Handles Specific Errors*/
  else if(totalInvestment > 100000){
    alert("Investment Needs to be Less than or equal to 100,000.");
  }
  else if(annualInterestRate > 15){
    alert("Annual Interest Rate Needs to be Less than or equal to 15.");
  }
  /*Calls function and uses previously defines vars as inputs for params.*/
  futureValue = calculateFV(totalInvestment, annualInterestRate, numOfYears)
  document.getElementById("futureValue").value = futureValue;
}

function calculateFV(investment, rate, years){
  for(i=1; i<= years * 12; i++) {
    futureValue = futureValue + investment
      (1 + ra  te * 12);
  return futureValue.toFixed(2);
}}
