document.addEventListener("DOMContentLoaded", () => {
  const $ = selector => document.querySelector(selector);
  //Gather Nodes
  const form = $("form")
  let p1Span = form.firstChild.nextElementSibling.firstChild.nextElementSibling.lastChild;
  let p2Span = form.firstChild.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.lastChild;
  
  //Gather Inputs from the HTML
  let name = $("#name").value
  let score = $("#score").value
  
  //Add to Array
  $('#ATA').onclick = () => {
    checkInput()
  }
  //Display Results
  $('#DR').onclick = () => {
    checkInput()
  }
  //Display Scores
  $('#DS').onclick = () => {
    checkInput()
  }
  

  //Data Validation 
  function checkInput(){
    if(name == ""){
      p1Span.textContent = " Please Enter a Name"
    }
      else{
        p1Span.textContent = ""
      }
    //Paragraph span 2
    if(score == ""){
      p2Span.textContent = " Please Enter a Score"
    }
      else{
        p2Span.textContent = ""
      }
    }

})