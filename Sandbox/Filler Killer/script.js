document.getElementById('btnClick').onclick = () => {
let input = document.getElementById("userInput").value;
  document.getElementById("output").value = RemoveFiller(input);
};


function RemoveFiller(text){
  let output = text;

  /*For each work in the array*/fillerWords.forEach(word => { /*do this*/
    const regex = new RegExp/*Regular expression constructor*/(`\\b${word}\\b`, "gi"); // Match whole words, case insensitive
    output = output.replace(regex, "");
  });
 // output = text.replace(String(iterator()), "")
  return output.trim();
}
const fillerWords = [ 
   "absolutely",  "actual", "actually", "amazing",
   "anyway", "apparently", "approximately", "badly",
   "basically", "begin", "certainly", "clearly", 
   "completely", "definitely", "easily", "effectively", 
   "entirely", "especially", "essentially", "exactly", 
   "extremely", "fairly", "frankly", "frequently", 
   "fully", "generally", "hardly", "heavily", 
   "highly", "hopefully", "just", "largely", 
   "like", "literally", "maybe", "might", 
   "most", "mostly", "much", "necessarily", 
   "nicely", "obviously", "ok", "okay", 
   "particularly", "perhaps", "possibly", "practically", 
   "primarily", "probably", "precisely", "quite", 
   "rather", "real", "really", "relatively", 
   "right", "seriously", "significantly", "simply", 
   "slightly", "so", "specifically", "start", 
   "strongly", "stuff", "surely", "things", 
   "too", "totally", "truly", "try", 
   "typically", "ultimately", "usually", "very", 
   "virtually", "whatever", "well", "whenever", 
   "wherever", "whoever", "widely",
]