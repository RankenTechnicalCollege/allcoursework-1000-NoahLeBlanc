const $ = selector => document.querySelector(selector);
//Gathers user Input
$("#addListItem").addEventListener('click', function(event){
  event.preventDefault();
})
const ol = $("ol")
//Creates the Element to be put in to the list
document.getElementById('addListItem').onclick = () => {
  if($("#listInput").value != ""){
    let listInput = $("#listInput").value
    const listItem = document.createElement("li")
    listItem.textContent = listInput
    ol.appendChild(listItem)
  }
}
//Removes the last List element
document.getElementById('removeListItem').onclick = () => {
  console.log(ol.childNodes)
  let dyingListText = ol.childNodes.length - 1
  let dyingListItem = ol.childNodes.length - 2
  ol.childNodes[dyingListText].remove()
  ol.childNodes[dyingListItem].remove()
}