const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

const btn = document.getElementById("btn");
const colour = document.getElementById("colour");

btn.addEventListener("click", function(){
    document.body.style.backgroundColor = hexColour();
    colour.textContent = hexColour();
});

const hexColour = () => {
    let hexValue = "#";
    for(i = 0; i < 6; i++) {
        hexValue += hex[Math.floor(Math.random() * hex.length)];
    }
    return hexValue;
}