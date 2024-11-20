const $ = selector => document.querySelector(selector);
//Gathers user Input
$("#addListItem").addEventListener('click', function(event){
  event.preventDefault();
})
const ol = $("ol")
//Creates the Element to be put in to the list
$('#addListItem').onclick = () => {
  if($("#listInput").value != ""){
    let listInput = $("#listInput").value
    const listItem = document.createElement("li")
    listItem.textContent = listInput
    ol.appendChild(listItem)
  }
}
//Removes text in list
ol.childNodes[10].remove()
ol.childNodes[8].remove()
ol.childNodes[6].remove()
ol.childNodes[4].remove()
ol.childNodes[2].remove()
ol.childNodes[0].remove()
console.log(ol.childNodes)
//Removes the last List element
$('#removeListItem').onclick = () => {
  console.log(ol.childNodes)
  let dyingListText = ol.childNodes.length - 1
  ol.childNodes[dyingListText].remove()
}