
window.onload = function () {
  let headingEl = document.getElementsByClassName("viewport-heading");
  headingEl[0].classList.add('visible');
  // console.log('added class');

  // setTimeout(function(){ 
  //   headingEl[0].classList.add('visible');
  //   console.log('added class');
  // }, 300);
};

// init controller
var controller = new ScrollMagic.Controller();

// // create a scene
// // build scene
// new ScrollMagic.Scene({
//   // triggerElement: "#about",
//   // triggerHook: 0.9, // show, when scrolled 10% into view
//   // duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
//   offset: 0 // move trigger to center of element
// })
// .setClassToggle(".heading-1", "visible") // add class to reveal
// .addIndicators() // add indicators (requires plugin)
// .addTo(controller);


// new ScrollMagic.Scene({
//     triggerElement: ".viewport-heading",
//     offset: 50,
//     triggerHook: 0.6,
//     duration: "80%",
//   })
//   .setClassToggle(".viewport-heading", "visible")
//   .addIndicators()
//   .addTo(controller);

var revealElements = document.getElementsByClassName("section-about__heading");
for (var i = 0; i < revealElements.length; i++) { // create a scene for each element
  new ScrollMagic.Scene({
    triggerElement: revealElements[i],
    offset: 50,
    triggerHook: 0.8,
    duration: "110%",
  })
    .setClassToggle(revealElements[i], "visible") // add class toggle
    // .addIndicators({ name: "heading " + (i + 1) }) // add indicators (requires plugin)
    .addTo(controller);
}


var scene = new ScrollMagic.Scene({ triggerElement: ".services-heading", duration: 200 })
  .addTo(controller)
  // .addIndicators()
  .on("enter", function (e) {
    let headingEl = document.getElementsByClassName("viewport-heading");
    headingEl[0].classList.remove('visible');
  });