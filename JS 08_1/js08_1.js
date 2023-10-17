document.getElementById('colorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var red = document.getElementById('red').value;
    var green = document.getElementById('green').value;
    var blue = document.getElementById('blue').value;
    var color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    displayColor(color, red, green, blue);
});

function displayColor(color, red, green, blue) {
    var colorContainer = document.createElement('div');
    colorContainer.className = 'color-container';

    var colorBox = document.createElement('div');
    colorBox.style.backgroundColor = color;
    colorBox.className = 'color-box';

    var colorInfo = document.createElement('p');
    colorInfo.textContent = `R: ${red}, G: ${green}, B: ${blue}`;

    colorContainer.appendChild(colorBox);
    colorContainer.appendChild(colorInfo);

    document.getElementById('colorResult').appendChild(colorContainer);
}