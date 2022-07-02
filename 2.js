let arraySize = +prompt('Please, enter an array length');
let array = [];

for (i = 0; i < arraySize; i++) {
array.push(Math.round(Math.random() *  arraySize));
} alert(array);

let total = array.reduce(function(a, b) {
    return a + b;
})
alert(total);

let getAverage = total / array.length;
alert(getAverage);