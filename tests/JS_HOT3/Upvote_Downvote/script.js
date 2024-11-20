const $ = selector => document.querySelector(selector);

//Get footer element 
const footer = $("footer")
//Get the paragraphs we want to use from the footer
const p1 = footer.childNodes[1]
const p2 = footer.childNodes[3]
const p3 = footer.childNodes[5]
//Get the Span Elements from the paragraphs 
const p1Span = p1.lastChild
const p2Span = p2.lastChild
const p3Span = p3.lastChild
//Create base vars to increment on click
upVotes = 0
downVotes = 0 
totalVotes = 0
//Assign the Span elements to have a value of 0
p1Span.textContent = upVotes
p2Span.textContent = downVotes
p3Span.textContent = totalVotes

//Change page based on user click
$("#upVote").onclick = () => {
  upVotes += 1
  p1Span.textContent = upVotes
  totalVotes = upVotes - downVotes
  p3Span.textContent = totalVotes
}
$('#downVote').onclick = () => {
  downVotes += 1
  p2Span.textContent = downVotes
  totalVotes = upVotes - downVotes
  p3Span.textContent = totalVotes
}
