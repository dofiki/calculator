let calculator = document.querySelector('.calculator'); 
let screen = document.querySelector('.screen');
let result = document.querySelector('.result');
let numpad = document.querySelector('.numpad');

let currentInput = ''; 

function displayDigit(x) {
    if (x === 'clear') {
        currentInput = '';
    }
    
    else if(x === 'back'){
        
        currentInput = currentInput.slice(0,1);
    }

    else {
        currentInput += x;
    }
    screen.innerText = currentInput;
}



function displayResult(currentInput){
    let inputResult = eval(currentInput);
    currentInput = '';
    screen.innerText = inputResult;
}
