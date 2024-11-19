const $ = selector => document.querySelector(selector);
//Creates Elements to be used
const section = document.createElement("section")
const div1 = document.createElement("div")
const div2 = document.createElement("div")
const h2 = document.createElement("h2")
const p = document.createElement("p")
const ul = document.createElement("ul")
const ol = document.createElement("ol")
const li = document.createElement("li")
//Builds Card and puts it into the HTML
section.appendChild(div1)
div1.appendChild(h2)
div1.appendChild(div2)
//Adds Base Classes to Elements
section.classList.add("card") //Makes Card Dark
div1.classList.add("card-body")
div2.classList.add("card-text")
h2.classList.add("card-title", "pb-2")
/*-----------------------More options based on user input--------------*/

//Adds pInputForm if p is checked
  //Checks if Radio P is already inputed
document.addEventListener("DOMContentLoaded", () => {
  if($("#p").checked){
    pInputForm.classList.toggle("open")
  }
})
  //Changes pInputForm depending on checked values
function changeDisplay(){
  if($("#p").checked){
    pInputForm.classList.toggle("open")
  }
  else if($("#ul").checked){
    if(pInputForm.classList.toggle("open")){
      pInputForm.classList.toggle("open")
    }
    else{
      console.log("It's already closed")
    }
    
  }
  else if($("#ol").checked){
    if(pInputForm.classList.toggle("open")){
      pInputForm.classList.toggle("open")
      }
    else{
      console.log("It's already closed")
      }
    }
}

/*--------------------------Changes Card based on input--------------*/




/*
div2.appendChild(p);
div2.appendChild(ul);
ul.appendChild(li);
*/
