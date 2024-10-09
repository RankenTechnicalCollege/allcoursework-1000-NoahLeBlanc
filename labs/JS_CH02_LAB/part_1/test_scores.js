"use strict";
let total = 0;
const score1 = parseInt(prompt("Enter Test Score"));
total += score1; //adds score 1 to the value of total
const score2 = parseInt(prompt("Enter Test Score"));
total += score2;//adds score 2 to the value of total
const score3= parseInt(prompt("Enter Test Score"));
total += score3; //adds score 3 to the value of total
const average = parseInt (total/3);
//divided the total by the total number of questions (3)
//we could add another var that asks for tot # of Q to make this better

const html = `<p>Score 1 = ${score1}</p>
              <p>Score 2 = ${score2}</p>
              <p>Score 3 = ${score3}</p>
              <p>Average score = ${average}</p>`
document.write(html)