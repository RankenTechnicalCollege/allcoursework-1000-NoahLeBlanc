document.getElementById('btnClick').onclick = () => {
  let pounds = parseFloat(document.getElementById("WeightInPounds").value);
  let inches = parseFloat(document.getElementById("HeightInInches").value);
  //First value is always height, second value is always pounds
  TotalBMI = calcBMI(inches, pounds)
  document.getElementById("output").innerHTML = TotalBMI.toFixed(2);
}
function calcBMI(inches, pounds){
  BMI  = (pounds * 703) / (inches ** 2)
  return BMI
}