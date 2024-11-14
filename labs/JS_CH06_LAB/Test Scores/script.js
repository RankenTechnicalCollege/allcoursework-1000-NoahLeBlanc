"Use strict"
document.addEventListener("DOMContentLoaded", () => {
  const $ = selector => document.querySelector(selector);
  //Gather Nodes
  const form = $("form")
  let p1Span = form.firstChild.nextElementSibling.firstChild.nextElementSibling.lastChild;
  let p2Span = form.firstChild.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.lastChild;
  
  //Gather Inputs from the HTML
  
  const names = []
  const scores = []
  //Add to Array
  $('#ATA').onclick = () => {
    if(checkInput()){
      let name = $("#name").value
      let score = parseFloat($("#score").value)
      names.push(name)
      scores.push(score)
      console.log(names)
      console.log(scores)
    }
    else if(checkInput() == false){
      console.log("oh no")
    }
  }
  //Display Results
  $('#DR').onclick = () => {
  }
  //Display Scores
  $('#DS').onclick = () => {
    let footer = $("footer")
    footer.innerHTML = ""
    for (let i = 0; i < names.length; i++) {
      let pElement = document.createElement("p");
      let ScoresText = document.createTextNode(`${names[i]}  ${scores[i]}`)
      pElement.appendChild(ScoresText)
      footer.appendChild(pElement)
    } 
  }



  //Data Validation 
  function checkInput(){
    let name = $("#name").value
    let score = $("#score").value
    let output = ""
    if(name == "" && score == ""){
      p1Span.textContent = " Please Enter a Name"
      p2Span.textContent = " Please Enter a Score"
      output = false
    }
    else if(name != "" && score != ""){
      p1Span.textContent = ""
      p2Span.textContent = ""
      output = true
    }
    else if(name == "" && score != ""){
      p1Span.textContent = " Please Enter a Name"
      p2Span.textContent = ""
      output = false
    }
    else if(name != "" && score == ""){
      p1Span.textContent = ""
      p2Span.textContent = " Please Enter a Score"
      output = false
    }
    return output
  }
})