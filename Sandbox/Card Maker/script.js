const $ = selector => document.querySelector(selector);

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
  /*--------------------------------------------Handles Building the Card-----------------------------------------*/
  document.addEventListener("DOMContentLoaded", () => {
    /*---------Creates Elements to be used----*/
    const section = document.createElement("section")
    const div1 = document.createElement("div")
    const div2 = document.createElement("div")
    const h = document.createElement("h2")
    h.textContent = "Place Holder Header"
    /*----------Builds the cards base---------*/
    $("#cardDisplay").appendChild(section)
    section.appendChild(div1)
    div1.appendChild(h)
    div1.appendChild(div2)
    /*-------Adds Base Classes to the card-----*/
    section.classList.add("card")
    div1.classList.add("card-body")
    div2.classList.add("card-text")
    h.classList.add("card-title", "p-2")
    /*---------------------------------------------Handles Colors for the Card-------------------------------------*/
    const radioInputs = document.getElementsByName("bgColors");
    $("#bgColorsForm").onclick = () => {
    let selectedInput;
    for(const radioInput of radioInputs){
      if(radioInput.checked){
        selectedInput = radioInput.value;
        break;
      }
    }
    switch (selectedInput) {
      case "blue":
        classChecker(section)
        classChecker(div1)
        section.classList.add("text-light")
        div1.classList.add("bg-primary")
        break;
      case "grey":
        classChecker(section)
        classChecker(div1)
        section.classList.add("text-light")
        div1.classList.add("bg-secondary")
        break;
      case "green":
        classChecker(section)
        classChecker(div1)
        section.classList.add("text-light")
        div1.classList.add("bg-success")
        break;
      case "red":
        classChecker(section)
        classChecker(div1)
        section.classList.add("text-light")
        div1.classList.add("bg-danger")
        break;
      case "yellow":
        classChecker(section)
        classChecker(div1)
        section.classList.add("text-dark")
        div1.classList.add("bg-warning")
        break;
      case "lightBlue":
        classChecker(section)
        classChecker(div1)
        section.classList.add("text-dark")
        div1.classList.add("bg-info")
        break;
        case "white":
          classChecker(section)
          classChecker(div1)
          section.classList.add("text-dark")
          div1.classList.add("bg-light")
          break;
        case "black":
          classChecker(section)
          classChecker(div1)
          section.classList.add("text-light")
          div1.classList.add("bg-dark")
          break;
      default:
        // Code to execute if no radio button is selected
        console.log("No radio button selected");
    }
  }
  const classChecker = (element) => {
    if(element.classList.length == 2){
      element.classList.remove(element.classList[element.classList.length - 1])
    }
  }
    /*---------------------------------------Handles Gathering inputs for the Card---------------------------------*/
    /*-----------Handles Header Input-------*/
    $("#hSubmit").onclick = () => {
      if($("#hInput").value == ""){
        hInputForm.childNodes[11].textContent = "Please Enter a Header"    
      }
      else if($("#hInput").value != ""){
        h.textContent = $("#hInput").value
      }
    }
    /*-----------Handles Paragraph Input-------*/
    $("#pSubmit").onclick = () => {
      if($("#pInput").value == ""){
        pInputForm.childNodes[11].textContent = "Please Enter a Paragraph"    
      }
      else if($("#pInput").value != ""){
        const p = document.createElement("p")
        p.textContent = $("#pInput").value
        div2.appendChild(p);
      }
    }
    /*-----------Handles Bulleted Input-------*/
    $("#ulSubmit").onclick = () => {
      if($("#ulInput").value == ""){
        ulInputForm.childNodes[11].textContent = "Please Enter a Paragraph"    
      }
      else if($("#ulInput").value != ""){
        const ul = document.createElement("ul")
        const li = document.createElement("li")
        li.textContent = $("#ulInput").value
        div2.appendChild(ul);
        ul.appendChild(li);
      }
    }
    /*-----------Handles Numbered Input-------*/
    $("#olSubmit").onclick = () => {
      if($("#olInput").value == ""){
        olInputForm.childNodes[12].textContent = "Please Enter a Paragraph"    
      }
      else if(div2.contains == $("#ol")){
        const li = document.createElement("li")
        li.textContent = $("#olInput").value
        ol.appendChild(li);
      }
      else{
        const ol = document.createElement("ol")
        div2.appendChild(ol);
        const li = document.createElement("li")
        li.textContent = $("#olInput").value
        ol.appendChild(li);
        console.log(div2.firstChild)
      }
    }
    $("#pSubmit").addEventListener('click', function(event){
      event.preventDefault();
    })  
  });

/*
const ol = document.createElement("ol")
const li = document.createElement("li")
div2.appendChild(p);
div2.appendChild(ul);
const ul = document.createElement("ul")
ul.appendChild(li);
*/
