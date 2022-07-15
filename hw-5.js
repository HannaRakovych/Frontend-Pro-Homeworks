// Task 1

const testArr = [0, 7, 19, 7, 9];
let max = testArr[0];

function getMax(arr, index) {
    if (index === arr.length) {
        return max;
    }
    console.log(arr[index])
    index++;
    return getMax(arr, index)
}

getMax(testArr, 0)

// Task 2

function pow(N, S) {
    if (S == 1) {
        return N ;
    } else {
        return N * pow(N, S - 1);
    }
}

console.log(pow(2, 2));

// Task 3

let getAdder = function () { 
    let result = 0; 
    return function(x) { 
        result += x; 
        return result; 
    } 
};
let sum = getAdder();
// sum(1) - 1
// sum(3) - 4

// Task 4