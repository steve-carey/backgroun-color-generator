var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient")
var btn = document.querySelector("button")

setGradient();
cssText();

// prints color details to the screen
function cssText () {
    css.textContent = body.style.background + ";";
}

// sets the background color gradient
function setGradient () {
    body.style.background =
    "linear-gradient(to right, "
     + color1.value 
     + ", " + color2.value 
     + ")";
     cssText();
}

// random color generator
// taken from stackoverflow
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// assigns color picker random color
function setRandomColor() {
    color1.value = getRandomColor();
    color2.value =  getRandomColor();
    setGradient();
    cssText();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click", setRandomColor);