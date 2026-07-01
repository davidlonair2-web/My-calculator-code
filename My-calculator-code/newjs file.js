function appendValue(value) 
{
    let display = document.getElementById('calcDisplay');
    
    if (display.value === "0" && value !== ".") {
        display.value = value;
    } else {
        display.value += value;
    }
}

function clearDisplay() 
{
    document.getElementById('calcDisplay').value = "0";
}

function deleteLast() 
{
    let display = document.getElementById('calcDisplay');
    display.value = display.value.slice(0, -1);
    
  
    if (display.value === "" || display.value === "-") {
        display.value = "0";
    }
}

function calculateResult() 
{
    let display = document.getElementById('calcDisplay');
    try {
        if (display.value === "") return;

        let lit = display.value;

        lit = lit.replace(/\^/g, '**');
        
   
        lit = lit.replace(/√\(([^)]+)\)/g, 'Math.sqrt($1)');
        lit = lit.replace(/√(\d+(\.\d+)?)/g, 'Math.sqrt($1)');

        lit = lit.replace(/(\d+(\.\d+)?\s*\*+\s*\d+(\.\d+)?)/g, '($1)');

        let result = eval(lit);
        display.value = result;
    } catch {
        display.value = "Error";
    }
}
    
