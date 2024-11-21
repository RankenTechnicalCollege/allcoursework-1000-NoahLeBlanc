"use strict";
/*Checks if DOM is ready*/ 
$(() => {
  $("#show1").click( evt => {
    const a = evt.currentTarget;
    if($("#show1").text() == "Show More"){
      $("#moreP1").addClass("open")
      $("#show1").text("Show Less")
    }
    else if($("#show1").text() == "Show Less"){
      $("#show1").text("Show More")
      $("#moreP1").removeClass("open")
    }
  })
  $("#show2").click( evt => {
    const a = evt.currentTarget;
    if($("#show2").text() == "Show More"){
      $("#moreP2").addClass("open")
      $("#show2").text("Show Less")
    }
    else if($("#show2").text() == "Show Less"){
      $("#show2").text("Show More")
      $("#moreP2").removeClass("open")
    }
  })
  $("#show3").click( evt => {
    const a = evt.currentTarget;
    if($("#show3").text() == "Show More"){
      $("#moreP3").addClass("open")
      $("#show3").text("Show Less")
    }
    else if($("#show3").text() == "Show Less"){
      $("#show3").text("Show More")
      $("#moreP3").removeClass("open")
    }
  })
});