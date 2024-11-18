const $ = selector => document.querySelector(selector);
/*------------------------Gets Current Time------------------------*/
let d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds()
/*-------------------Gets Main Elements from html------------------------*/
const main = $("main")
pElement = main.firstChild.nextElementSibling;
pSpan1 = pElement.firstChild
pSpan2 = pElement.lastChild
/*-----------------------Calculates PM or AM----------------------------*/
function PMorAM(hours){
  if(hours > 11){
    return "PM"
  }else{
    return "AM"
  }
}
/*------------------------Injects JS into HTML------------------------*/
//Handles Integer Display
pSpan1.textContent = `${h}:${m}:${s}`
//Handles PM and AM
pSpan2.textContent = PMorAM(h)