var divIds = ["Q1", "Q2", "Q3"],
    divSet = 0;

function nextButton() {
    "use strict";
    document.getElementById("backButton").style.display = 'block';
    var x = document.getElementById(divIds[divSet]);
    x.style.display = 'none';
    divSet += 1;
    x = document.getElementById(divIds[divSet]);
    if (divSet === divIds.length - 1) {
        document.getElementById("nextButton").style.display = 'none';
        document.getElementById("submitButton").style.display = 'block';
        document.getElementById("backButton").style.display = 'block';
        x.style.display = 'block';
    } else if (divSet < divIds.length) {
        x.style.display = 'block';
    }
}
    
function backButton() {
    "use strict";
    if (document.getElementById("nextButton").style.display === 'none') {
        document.getElementById("nextButton").style.display = 'block';
    }
    if (document.getElementById("submitButton").style.display === 'block') {
        document.getElementById("submitButton").style.display = 'none';
    }
    var x = document.getElementById(divIds[divSet]);
    if (x === null) {
        divSet = divIds.length - 1;
    }
    x.style.display = 'none';
    divSet -= 1;
    x = document.getElementById(divIds[divSet]);
    if (divSet > 0) {
        
        x.style.display = 'block';
    } else {
        x.style.display = 'block';
        document.getElementById("backButton").style.display = 'none';
        
    }
}
