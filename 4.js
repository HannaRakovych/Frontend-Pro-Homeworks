// 1) Push
function myPush(arr, val) {
    let length = arr.length;
    arr[length] = val;
      return arr;
    }
           
    let numArray = [44,55,66,77];
    let value = 100; 
    console.log(myPush(numArray, value));

// 2) Pop
function myPop(arr) {
    let arrLength = arr.length;
    let deleteObj = arr[arrLength - 1];
    arr.length = arrLength - 1;
    return arr;
}

let array = [1, 2, 3, 4, 7];
console.log(myPop(array))


// 3) Shift
function myShift(arr) {
    let arrLength = arr.length;
    let deleteObj = arr[0];
    for (let i = 0; i < arrLength; i++) {
        arr[i] = arr[i + 1] ;
    } arr.length -= 1;
    return arr;
} 

let array = [1, 2, 3, 4, 7];
console.log(myShift(array));

// 4) Unshift