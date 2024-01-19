// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the button and text elements by their IDs
    var button = document.getElementById('colorChangeButton');
    var text = document.getElementById('textToChange');

    // Add a click event listener to the button
    button.addEventListener('click', function () {
        // Change the text color to a random color
        var randomColor = getRandomColor();
        text.style.color = randomColor;
    });

    // Function to generate a random color
    function getRandomColor() {
        var letters = '0123456789ABCDEF'; // String containing valid characters for the hexidecimal color code
        var color = '#';
        // The below for loop iterates 6 times to generate a random six-character hexadecimal color code
        // The # is also prefixed as required for the CSS color values
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color; // hexidecimal color code is returned
    }
});