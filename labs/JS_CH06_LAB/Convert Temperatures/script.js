const $ = selector => document.querySelector(selector);
//Gather's input
const input = $("#input").value
//Handles Data
if ($("#FTC").checked){
  output = Math.round((input - 32) * 5/9)
}else if ($("#CTF").checked){
  output = Math.round((input - 32) * 5/9)
}else{
  console.log("No Input")
}
//on click function goes here
if ($("#FTC").checked && input != ""){
  output = Math.round((input - 32) * 5/9)
}else if ($("#CTF").checked && input != ""){
  output = Math.round((input - 32) * 5/9)
}else{
  alert("No Input")
}
//Injects Output
$("#FTC").value = output