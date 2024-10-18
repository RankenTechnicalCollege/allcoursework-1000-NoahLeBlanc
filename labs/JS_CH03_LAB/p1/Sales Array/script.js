//The array itself is not mutable but the values are.
const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];
//This is to get the sum of all the arrays 1st, 2nd, 3rd, and 4th value into one array
const Q1 = [region1[0], region2[0], region3[0], region4[0], region5[0]]
const Q2 = [region1[1], region2[1], region3[1], region4[1], region5[1]]
const Q3 = [region1[2], region2[2], region3[2], region4[2], region5[2]]
const Q4 = [region1[3], region2[3], region3[3], region4[3], region5[3]]
//End of arrays

//Reduce method allows me to quickly add up all the values of the arrays. :3
let sum1 = region1.reduce((accumulator, current) => accumulator + current);
let sum2 = region2.reduce((accumulator, current) => accumulator + current);
let sum3 = region3.reduce((accumulator, current) => accumulator + current);
let sum4 = region4.reduce((accumulator, current) => accumulator + current);
let sum5 = region5.reduce((accumulator, current) => accumulator + current);
//Reduce method allows me to quickly add up all the values of the arrays 1st,2nd,3rd and 4th values. :3
let QSum1 = Q1.reduce((accumulator, current) => accumulator + current);
let QSum2 = Q2.reduce((accumulator, current) => accumulator + current);
let QSum3 = Q3.reduce((accumulator, current) => accumulator + current);
let QSum4 = Q4.reduce((accumulator, current) => accumulator + current);

document.write(`<h1>Sales Data</h1>`);
//Begin Sales by Quarter
document.write(`<h2>Sales by Quarter</h2>`);
document.write(`
  <div>
    <p>Q 1: $${QSum1}</p>
    <p>Q 2: $${QSum2}</p>
    <p>Q 3: $${QSum3}</p>
    <p>Q 4: $${QSum4}</p>
  </div>
  `);
//Begin Sales by region
document.write(`<h2>Sales by region</h2>`);
document.write(
  `
  <div>
    <p>Region 1: $${sum1}</p>
    <p>Region 2: $${sum2}</p>
    <p>Region 3: $${sum3}</p>
    <p>Region 4: $${sum4}</p>
    <p>Region 5: $${sum5}</p>
  </div>
  `);
document.write(`<h2>Total Sales</h2>`);
document.write(`<p>$${test}</p>`);