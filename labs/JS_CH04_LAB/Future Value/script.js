document.getElementById('btnClick').onclick = () => {
  let totalInvestment = parseFloat(document.getElementById("totalInvestment").value);
  let annualInterestRate = parseFloat(document.getElementById("annualInterestRate").value);
  let numOfYears = parseFloat(document.getElementById("numOfYears").value);
  futureValue = calculateFV(totalInvestment, annualInterestRate, numOfYears)
  document.getElementById("futureValue").value = futureValue;
}

function calculateFV(investment, rate, years){
  futureValue = investment
  futureValue += futureValue * rate / 100
  return futureValue;
}