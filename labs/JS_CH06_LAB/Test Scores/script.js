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
    let results = $("#results")
    resultsSpan1 = results.childNodes[3].lastChild;
    const max = Math.max(...scores);
    resultsSpan1.textContent = max 
    resultsSpan2 = results.childNodes[5].lastChild;
    matchIndex = scores.indexOf(max)
    resultsSpan2.textContent = names[matchIndex]
    
  }
  //Display Scores
  $('#DS').onclick = () => {
    let section = $("section")
    section.innerHTML = ""
    for (let i = 0; i < names.length; i++) {
      let pElement = document.createElement("p");
      let ScoresText = document.createTextNode(`${names[i]}  ${scores[i]}`)
      pElement.appendChild(ScoresText)
      section.appendChild(pElement)
    } 
  }



  //Data Validation 
  function checkInput(){
    let name = $("#name").value
    let score = parseFloat($("#score").value)
    let output = ""
    if(name == ""){
      p1Span.textContent = "Please enter a name"
      output = false
    }
    else{
      outputName = true
    }
    if(isNaN(score)){
      p2Span.textContent = "Please enter a score"
      output = false
    }
    else if( 0 > score || score > 100 ){
      p2Span.textContent = "Score must be between 0 and 100"
      output = false
    }
    else{
      outputScore = true
    }
    if(outputScore == true && outputName == true){
    return true
    }else{
      console.log("input = failed")
    }
  }
})