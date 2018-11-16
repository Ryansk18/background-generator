var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomize");

//Displays hexidecimal color values
function gradientPicker(){
    var gradient = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"
    body.style.background = gradient;
    css.textContent = gradient;
}

function randomGradient(){
    color1.value = "#" + Math.random().toString(16).slice(2, 8);
    color2.value = "#" + Math.random().toString(16).slice(2, 8);
    gradientPicker();
}

//This also works
//Displays rgba color values
/*function gradientPicker(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"
    
    css.textContent = body.style.background + ";";
}*/

color1.addEventListener("input", gradientPicker);

color2.addEventListener("input", gradientPicker);

button.addEventListener("click", randomGradient);