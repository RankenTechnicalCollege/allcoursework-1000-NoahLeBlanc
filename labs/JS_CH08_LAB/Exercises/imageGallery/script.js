/* Loads DOM */ 
"use strict"
$(() => {  
  const caption = $("#caption");
  const mainImage = $("#main_image");
  const imageLinks = $("#image_list").querySelectorAll("a");
  for ( let link of imageLinks )/*So it's an object*/ {
    const image = new Image(); /*We make an img element*/
    image.src = link.href; /*We make it's source match the links source*/
    image.title = link.title;/*We make it's title match the links title*/
  }
  $("a").click(function(event){
    event.preventDefault();
    mainImage.src = link.href;
    mainImage.alt = link.title;
    caption.textContent = link.title;
  });
}); 