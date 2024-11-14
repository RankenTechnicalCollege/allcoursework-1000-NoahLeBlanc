document.addEventListener("DOMContentLoaded", () => {
  const $ = selector => document.querySelector(selector);
  //Triggers when FTC is selected
  $('#FTC').onclick = () => {
    $("#inputlabel").innerHTML = "Enter f degree"
  }
  //Triggers when CTF is selected
  $('#FTC').checked = () => {
    let label = $("#inputlabel").innerHTML
    label.innerHTML = "xyz"
  }


  //Triggers when Convert Button is clicked.
  document.getElementById('btnClick').onclick = () => {
    //Gather's input
    const input = $("#input").value
    //Handles Data
    //Handles Data and Calculation
    if ($("#FTC").checked && input != ""){
      output = Math.round((input - 32) * 5/9)
      $("#output").value = output
    }else if ($("#CTF").checked && input != ""){
      output = Math.round((input * (9/5) + 32));
      $("#output").value = output
    //Injects Output 
    }
  }
})