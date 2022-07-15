function quotient(x, y) {
    let result = parseInt(x / y);
    return result;
} 

function doFunction(num1, num2, quotient)  {
    let value =  quotient(num1, num2);
    return value;
}


console.log(doFunction(12, 2, quotient));