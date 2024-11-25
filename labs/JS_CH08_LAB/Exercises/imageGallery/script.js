/* Loads DOM */ 
"use strict"
$(() => {  
  $("a").first().focus() 
  //Preloads images
  $("#image_list a").each((index, link) => {
    const image = new Image();
    image.src = link.href;
  });
  //Event handlers
  $("#image_list a").click( evt =>{
    const link = evt.currentTarget;
    $("#main_image").attr("src", link.href)
    $("#main_image").attr("alt", link.title)
    $("#caption").text(link.title)
    evt.preventDefault();
  })
  let currentLinkIndex = 0;
  let links = $('a');
  $(document).keydown(function(e) {
    if (e.key === "ArrowRight") {
      currentLinkIndex = (currentLinkIndex + 1) % links.length;
      $(links[currentLinkIndex]).focus();
    } 
    else if (e.key === "ArrowLeft") {
      currentLinkIndex = (currentLinkIndex - 1 + links.length) % links.length;
      $(links[currentLinkIndex]).focus();
    }
  });
});
