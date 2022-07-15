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