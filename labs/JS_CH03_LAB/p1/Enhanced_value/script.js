//declares Investment
let investment = 0;

//does this until the while is false. 
do {
  //Makes investment have the float value of user input value. 
  investment = parseFloat(prompt("Enter investment amount as xxxxx.xx", 10000/*This is placeholder #*/));}
  while(isNaN(investment)); //while this is not a number repeat prev line.

//declares rate  
let rate = 0;

//do this until while is false. 
do {
  rate = parseFloat(prompt("Enter interest rate as xx.x", 7.5/*This is placeholder #*/));}
  while (isNaN (rate));//while var rate is not a number repeat prev line

let years = 0;
do {
  years = parseInt(prompt("Enter number of years", 10));
}
  while(isNaN(years));

const months = years * 12 //converts # of years into months
const monthly_rate = rate/12
let futureValue_years = investment; //makes futureValue the same as investment value
for (let i = 1; i <= years; i++){ //i increase by 1 if less than or equal to value of years.
  futureValue_years += futureValue_years * rate / 100;//makes futureValue = itself times rate divided by 100
}
let futureValue_months = investment; //makes futureValue the same as investment value
for (let i = 1; i <= months; i++){ //i increase by 1 if less than or equal to value of years.
  futureValue_months += futureValue_months * monthly_rate / 100;//makes futureValue = itself times rate divided by 100
}


//Doc write for the Yearly value
document.write(`<h1>The Future Value Calculator</h1>`)
document.write(`<h2>The Future Value with yearly interest</h2>`)
document.write(`<p><label>Investment amount: </label>${investment}</p>`);
document.write(`<p><label>Interest rate: </label>${rate}</p>`);
document.write(`<p><label>Years: </label>${years}</p>`);
document.write(`<p><label>Future Value: </label>${futureValue_years.toFixed(2)}</p>`);
//Doc write for the monthly value
document.write(`<h2>The Future Value with Monthly interest intrest</h2>`)
document.write(`<p><label>Investment amount: </label>${investment}</p>`);
document.write(`<p><label>Interest rate: </label>${rate}</p>`);
document.write(`<p><label>Years: </label>${years} (Months:${months})</p>`);
document.write(`<p><label>Future Value: </label>${futureValue_months.toFixed(2)}</p>`);
