window.addEventListener("load", function () {
    var elements = document.getElementsByClassName("rainbow-text");

    for (var i = 0; i < elements.length; i++) {
        generateRainbowText(elements[i]);
    }
});

function generateRainbowText(element) {
    var style = getComputedStyle(document.body);
    var red = style.getPropertyValue('--red');
    var orange = style.getPropertyValue('--orange');
    var yellow = style.getPropertyValue('--yellow');
    var green = style.getPropertyValue('--green');
    var blue = style.getPropertyValue('--blue');
    var indigo = style.getPropertyValue('--indigo');
    var purple = style.getPropertyValue('--purple');
    var colors = [red, orange, yellow, green, blue, indigo];
    var text = element.innerText;
    var j = 0;
    element.innerHTML = "";
    for (var i = 0; i < text.length; i++) {
        var isCharacter = (text[i] != ' ');
        if (isCharacter) {
            var colorIndex = j % colors.length;
            j++;
        }
        var color = colors[colorIndex];
        var charElem = document.createElement("span");
        charElem.style.color = color;
        charElem.innerHTML = text[i];
        element.appendChild(charElem);
    }
}