const $ = selector => document.querySelector(selector);
//Handles Getting the Elements we need from the page
const loginForm = $("#loginForm")
const span = loginForm.childNodes[7]
$("#submit").addEventListener('click', function(event){
  event.preventDefault();
})
//Handles Data Validation
document.getElementById('submit').onclick = () => {
  if($("#email").value == "admin@example.com" && $("#password").value == "password"){
    span.textContent = "Welcome back Admin!"
  }
  if($("#email").value == "" || $("#password").value == ""){
    span.textContent = "You seem to have forgotten your username and password."
  }
  else if($("#email").value != "admin@example.com" && $("#password").value != "password"){
    span.textContent = "That email and password doesn't seem to be right. Try again."
  }
}