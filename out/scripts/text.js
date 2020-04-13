// const MathUtils = {
//   // Equation of a line.
//   lineEq: (y2, y1, x2, x1, currentVal) => {
//     var m = (y2 - y1) / (x2 - x1), b = y1 - m * x1;
//     return m * currentVal + b;
//   },
//   // Linear Interpolation function.
//   lerp: (a, b, n) =>  (1 - n) * a + n * b
// };

// // Create the blotter material. 
// const material = new Blotter.LiquidDistortMaterial();
// // Set the default material uniform values.
// material.uniforms.uSpeed.value = .5;
// material.uniforms.uVolatility.value = 0;
// material.uniforms.uSeed.value = 0.4;
// // Create the Blotter instance.
// const blotter = new Blotter(material);
// // Initialize the Blotter Text on all HTML elements with data-blotter.
// const blotterElems = [...document.querySelectorAll('[data-blotter]')];
// blotterElems.forEach((el) => {
//   const text = new Blotter.Text(el.innerHTML);
//   blotter.addText(text);
//   // Now delete the html content.
//   el.innerHTML = '';
//   // The created canvas.
//   const scope = blotter.forText(text);
//   // Append it to the main element.
//   scope.appendTo(el);
// });

// // Now, change one (or more) uniform value as we scroll. 
// // The faster the scrolling the more the value changes.
// let currentScroll = window.pageYOffset;
// // The volatility is the uniform that will change.  
// let volatility = 0;
// // It will go from 0 (not scrolling) to 0.9 (scrolling at a speed of maxscroll).
// const maxscroll = 10;
// const uniformValuesRange = [0,0.9];
// // Using requestAnimationFrame + linear interpolation for the effect.
// const render = () => {
//   // Current scroll position
//   const newScroll = window.pageYOffset;
//   // How much was scrolled from the last repaint.
//   const scrolled = Math.abs(newScroll - currentScroll);
//   // Get the new value of volatility.
//   volatility =  MathUtils.lerp(volatility, Math.min(MathUtils.lineEq(uniformValuesRange[1], uniformValuesRange[0], maxscroll, 0, scrolled), 0.9), 0.05);
//   // Set the volatility.
//   material.uniforms.uVolatility.value = volatility;
//   // Update the current scroll.
//   currentScroll = newScroll;
//   // Repeat.
//   requestAnimationFrame(render);
// }
// requestAnimationFrame(render);


// // BLOTTER - Example 2
// var text = new Blotter.Text("Exper", {
//   family : "'EB Garamond', serif",
//   size : 27,
//   fill : "#171717",
//   paddingLeft : 40,
//   paddingRight : 40
// });

// var material = new Blotter.LiquidDistortMaterial();

// // Play with the value for uSpeed. Lower values slow
// // down animation, while higher values speed it up. At
// // a speed of 0.0, animation is stopped entirely.
// material.uniforms.uSpeed.value = 0.25;

// // Try uncommenting the following line to play with
// // the "volatility" of the effect. Higher values here will
// // produce more dramatic changes in the appearance of your
// // text as it animates, but you will likely want to keep
// // the value below 1.0.
// //material.uniforms.uVolatility.value = 0.30;

// var blotter = new Blotter(material, {
//   texts : text
// });

// var elem = document.getElementById("distortion-text");
// var scope = blotter.forText(text);

// scope.appendTo(elem);





// let el = document.getElementsByClassName("heading-1");
// console.log(el);
// let string = el[0].innerText;
// string.split("");
// var i = 0, length = string.length;

// for (i; i < length; i++) {
//   el[0].innerHTML += "<i>" + string[i] + "</i>";
// }


Splitting();