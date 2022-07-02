let arraySize = +prompt('Please, enter an array length');
let array = [];

for (let i = 0; i < arraySize; i++) {
    let i = +prompt('Please, enter a number of your array');
  array.push(i);
} alert(array);

let getMinValue = Math.min(...array);
alert(getMinValue);
let getMaxValue = Math.max(...array);
alert(getMaxValue);

minIndex = array.indexOf(Math.min(...array));
maxIndex = array.indexOf(Math.max(...array));


[array[minIndex], array[maxIndex]] = [array[maxIndex], array[minIndex]]
alert(array)