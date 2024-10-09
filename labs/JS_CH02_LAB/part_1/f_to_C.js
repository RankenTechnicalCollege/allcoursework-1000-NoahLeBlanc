const fahrenheit = parseFloat(prompt("Enter Fahrenheit Temp"))

//This gets our value
const sub = fahrenheit-32;
const output = sub * 5/9; 
const html  = `<p>${fahrenheit.toFixed(1)}F = ${output.toFixed(1)}C</p>`;
document.write(html);