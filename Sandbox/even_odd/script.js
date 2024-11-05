/*-------------------------------Handles Even operation----------------------------- */
document.getElementById('even').onclick = () => {
  let input = parseInt(document.getElementById("input").value);
  let evenArray = [];
  for(i = 0; i < input; i+=2){
    evenArray.push(i);
  }
  document.getElementById("evenOddOutput").innerHTML = `Even Numbers: <br> ${evenArray}`;
}
/*-------------------------------Handles Odd operation----------------------------- */
document.getElementById('odd').onclick = () => {
  let input = parseInt(document.getElementById("input").value);
  let oddArray = [];
  for(i = 1; i < input; i+=2){
    oddArray.push(i);
  }
  document.getElementById("evenOddOutput").innerHTML = `odd Numbers: <br> ${oddArray}`;
  
}

/*-------------------------------Handles Multiples operation----------------------------- */
document.getElementById('multiples').onclick = () => {
  let input = parseInt(document.getElementById("inputMultiples").value);
  let upTo = parseInt(document.getElementById("upTo").value);
  let multiplesArray = [];
  for(i = input; i < upTo; i += input){
    multiplesArray.push(i);
  }
  document.getElementById("multiplesOutput").innerHTML = `There are ${multiplesArray.length} multiples of ${upTo} <br> They are ${multiplesArray}`;
  
}