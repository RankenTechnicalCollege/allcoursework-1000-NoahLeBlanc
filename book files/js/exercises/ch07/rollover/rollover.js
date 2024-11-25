"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    //Gathers Images from the HTML
    var mainImage = $("#mainImage");
    var mainImage = $("#mainImage");

    //Gets all the links from the UL with the id image_list
    const links = $("#image_list").querySelectorAll("a");

    // attach mouseover and mouseout events for each image
    for ( let link of links) {
        //create a new Image object
        const image = new Image();
        //Grab src attr from image and attach link.href
        image.src = link.href;
    }
    for (let link of links){
        mainImage.addEventListener("mouseover", () => {
            //converts the image to hero.jpg when mouse overed
            mainImage.src ="images/hero.jpg";
        });
        mainImage.addEventListener("mouseout", () => {
            mainImage.src ="images/release.jpg";
        });
        mainImage.addEventListener("mouseover", () => {
            mainImage.src ="images/deer.jpg";
        });
        mainImage.addEventListener("mouseout", () => {
            mainImage.src ="images/bison.jpg";
        });           
    }

});
