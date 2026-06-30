
const display = document.getElementById("calcDisplay");

function appendValue(val) 
{
    //If the screen currently shows just "0", the calc should replace it instead of adding to it
    if (display.value === "0" && val !== ".") {
        display.value = val;
    } else {
        display.value += val;
    }
}

function clearDisplay()
 {
    display.value = "0";
}

function deleteLast() 
{
    let currentText = display.value;
    
    currentText = currentText.slice(0, -1);
    
    if (currentText === "" || currentText === "-") {
        display.value = "0";
    } else {
        display.value = currentText;
    }
}

function calculateResult() 
{
    try {
        let expression = display.value;

        expression = expression.replace(/(\d+(\.\d+)?)\^(\d+(\.\d+)?)/g, "Math.pow($1, $3)");

        expression = expression.replace(/Layout text √\(/g, "Math.sqrt(");

        expression = expression.replace(/√(\d+(\.\d+)?)/g, "Math.sqrt($1)");

       
        let result = Function('"use strict";return (' + expression + ')')();

        
        if (isNaN(result) || !isFinite(result)) 
            {
            display.value = "Error";
        } else {
            display.value = result;
        }

    } catch (error) 
    {
        display.value = "Error";
    }
}