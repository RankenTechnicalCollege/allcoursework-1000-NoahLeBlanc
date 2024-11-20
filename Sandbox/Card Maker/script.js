const $ = selector => document.querySelector(selector);
/*--------------------------------------------Handles Building the Card------------------------------------------------*/
/*---------Creates Elements to be used----*/
const section = document.createElement("section")
const div1 = document.createElement("div")
const div2 = document.createElement("div")
const h2 = document.createElement("h2")
const p = document.createElement("p")
const ul = document.createElement("ul")
const ol = document.createElement("ol")
const li = document.createElement("li")
/*----------Builds the cards base---------*/
section.appendChild(div1)
div1.appendChild(h2)
div1.appendChild(div2)
/*-------Adds Base Classes to the card-----*/
section.classList.add("card") //Makes Card Dark
div1.classList.add("card-body")
div2.classList.add("card-text")
h2.classList.add("card-title", "pb-2")
/*-----------------------------------------Handles Content type Input Visuals-----------------------------------------------------*/
/*-------Makes Shorthand for Toggles-----*/
const pToggle = () => {pInputForm.classList.toggle("open")}
const ulToggle = () =>{ulInputForm.classList.toggle("open")}
const olToggle = () =>{olInputForm.classList.toggle("open")}
/*-Shorthand Check if classList contains "open"-*/
const pContains = () =>{
  if(pInputForm.classList.contains("open")){
    return true
  }
  else{
    return false
  }
}
const ulContains = () =>{
  if(ulInputForm.classList.contains("open")){
    return true
  }
  else{
    return false
  }
}
const olContains = () =>{
  if(olInputForm.classList.contains("open")){
    return true
  }
  else{
    return false
  }
}
/*-------Handles on refresh Scenarios-----*/
document.addEventListener("DOMContentLoaded", () => {
  if($("#p").checked){
    pToggle()
  }
  if($("#ul").checked){
    ulToggle()
  }
  if($("#ol").checked){
    olToggle()
  }
})
/*changes Input Display depending on checked value*/
function changeDisplay(){
  if($("#p").checked){
      if(ulContains()){//if ul display is Visible:
        ulToggle()//Turns off ul  input display
        pToggle()//Turns on p input display
      }
      else if(olContains()){ 
        olToggle()
        pToggle()
      }
      else{
        pToggle()
      }
    }
  if($("#ul").checked){
      if(olContains()){
        olToggle()
        ulToggle()
      }
      else if(pContains()){
        pToggle()
        ulToggle()
      }
      else{
        ulToggle()
      }
    }
  if($("#ol").checked){
      if(pContains()){
        pToggle()
        olToggle()
        }
      else if(ulContains()){
        ulToggle()
        olToggle()
        }
      else{
        olToggle()
      }
    }
}

/*---------------------------------------------------Changes Card based on input--------------------------------------------------*/
/*---Handles Paragraph Input--*/
$("#pSubmit").onclick = () => {
  if($("#pInput").value == ""){
    pInputForm.childNodes[11].textContent = "Please Enter a Paragraph"    
  }
}
/*-Handles Bulleted list Input-*/
$("#ulSubmit").onclick = () => {
}
/*-Handles Numbered list Input-*/
$("#olSubmit").onclick = () => {
}

$("#pSubmit").addEventListener('click', function(event){
  event.preventDefault();
})


/*
div2.appendChild(p);
div2.appendChild(ul);
ul.appendChild(li);
*/
