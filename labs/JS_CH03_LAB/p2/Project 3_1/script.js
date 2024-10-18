
document.getElementById('btnClick').onclick = () => {
let HTMLInput = parseFloat(document.getElementById("input1").value);
const V1 = HTMLInput;
HTMLInput = parseFloat(document.getElementById("input2").value);
const V2 = HTMLInput;
HTMLInput = parseFloat(document.getElementById("input3").value);
const V3 = HTMLInput;
HTMLInput = parseFloat(document.getElementById("input4").value);
const V4 = HTMLInput;
HTMLInput = parseFloat(document.getElementById("input5").value);
const V5 = HTMLInput;

function CalcAverage(){
  const allValues = [V1, V2, V3, V4 ,V5]
  const total = allValues.reduce((accumulator, current) => accumulator + current);
  const average = total/allValues.length;
  return average
}
document.write(`<p>average is ${CalcAverage()}</p>`)
}