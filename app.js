const mainButton = document.querySelector(".btn");
const body = document.body;
const currentColor = document.querySelector(".current-color");

mainButton.addEventListener("click", function(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red},${green},${blue})`;
    body.style.backgroundColor = randomColor;
    currentColor.textContent = randomColor;

})