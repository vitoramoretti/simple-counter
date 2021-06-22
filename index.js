let number = 0;

let numberElement = document.getElementById('num');
console.log(numberElement)

function increment() {
   number = number + 1;
   numberElement.innerText = number;
}

function decrement() {
    number = number - 1;
    numberElement.innerText = number;  
}

function reset() { 
    numberElement.innerText = 0;
    number = 0;
}