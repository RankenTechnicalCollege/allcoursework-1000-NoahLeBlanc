"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    //Gathers Images from the HTML
    var image1 = $("#image1");
    var image2 = $("#image2");

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
        image1.addEventListener("mouseover", () => {
            //converts the image to hero.jpg when mouse overed
            image1.src ="images/hero.jpg";
        });
        image1.addEventListener("mouseout", () => {
            image1.src ="images/release.jpg";
        });
        image2.addEventListener("mouseover", () => {
            image2.src ="images/deer.jpg";
        });
        image2.addEventListener("mouseout", () => {
            image2.src ="images/bison.jpg";
        });           
    }

});
