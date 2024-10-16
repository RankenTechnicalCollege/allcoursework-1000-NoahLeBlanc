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

let futureValue = investment; //makes futureValue the same as investment value
for (let i = 1; i <= years; i++){ //i increase by 1 if less than or equal to value of years.
  futureValue += futureValue * rate / 100;//makes futureValue = itself times rate divided by 100
}
document.write(`<h1>The Future Value Calculator</h1>`)
document.write(`<p><label>Investment amount: </label>${investment}</p>`);
document.write(`<p><label>Interest rate: </label>${rate}</p>`);
document.write(`<p><label>Years: </label>${years}</p>`);
document.write(`<p><label>Future Value: </label>${futureValue.toFixed(2)}</p>`);


