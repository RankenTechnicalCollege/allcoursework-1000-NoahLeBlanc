document.addEventListener("DOMContentLoaded", () => {
  const $ = selector => document.querySelector(selector);
  let inputLabel = $("#inputlabel")
  let outputLabel = $("#outputlabel")
  
  $('#FTC').onclick = () => {
    inputLabel.textContent = "Enter F degrees"
    outputLabel.textContent = "Degrees Celsius"
  }
  //Triggers when CTF is selected
  $('#CTF').onclick = () => {
    inputLabel.textContent = "Enter C degrees"
    outputLabel.textContent = "Degrees Fahrenheit"
  }


  //Triggers when Convert Button is clicked.
  document.getElementById('btnClick').onclick = () => {
    //Gather's input
    let input = parseFloat($("#input").value)
    //Handles Data and Calculation
    if(isNaN(input)){
      $("#output").value = "Error"
      let footer = $("footer")
      footer.innerHTML = ""
      let pElement = document.createElement("p");
      let ScoresText = document.createTextNode("You must enter a valid number for degrees")
      pElement.appendChild(ScoresText)
      footer.appendChild(pElement)
    }
    else if ($("#FTC").checked && input != ""){
      output = Math.round((input - 32) * 5/9)
      let footer = $("footer")
      footer.innerHTML = ""
      $("#output").value = output
    }else if ($("#CTF").checked && input != ""){
      let footer = $("footer")
      footer.innerHTML = ""
      output = Math.round((input * (9/5) + 32));
      //Injects Output 
      $("#output").value = output
    }
  }
})