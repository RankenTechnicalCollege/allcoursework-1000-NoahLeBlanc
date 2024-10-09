
function getTotal{
//How much the items cost
const BURGERS = 1;
const FRIES = 2;
const SODAS = 2.50;

//Starting amount of item chosen 
let burgerAmount = document.getElementById('burgerNum');
let friesAmount = document.getElementById('friesNum');;
let sodasAmount = document.getElementById('sodasNum');;

//Total
document.getElementById('output') = (burgerAmount * BURGERS)+(friesAmount * FRIES)+(sodasAmount * SODAS);
}