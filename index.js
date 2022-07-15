const numbers = {
    1: ['1', '2', '4'],
    2: ['1', '2', '3', '5'],
    3: ['3', '2', '6'],
    4: ['1', '7', '4', '5'],
    5: ['2', '4', '6', '8', '5'],
    6: ['3', '5', '9', '6'],
    7: ['4', '7', '8'],
    8: ['5', '7', '8', '9', '0'],
    9: ['6', '8', '9'],
    0: ['0', '8'],
}

function getCodes(observedCode) {
    const initialLength = observedCode.length;
    
    switch (initialLength) {
        case 1:
            observedCode = '000' + observedCode;
            break;
        case 2:
            observedCode = '00' + observedCode;
            break;
        case 3:
            observedCode = '0' + observedCode;
            break;
        default:
            observedCode = observedCode;
        break;
    }

const resultArray1 = numbers(observedCode[0])
const resultArray2 = numbers(observedCode[1])
const resultArray3 = numbers(observedCode[2])
const resultArray4 = numbers(observedCode[3])

let result = [];

resultArray1.forEach(el1 => {
    if (initialLength === 1) {
        result.push(el1)
    }
    resultArray2.forEach(el2 => {
        if (initialLength === 2) {
            result.push(`${el1}${el2}`)
        } 
        resultArray3.forEach(el3 => {
            if (initialLength === 3) {
                result.push(`${el1}${el2}${el3}`)
            } 
            resultArray4.forEach(el4 => {
                if (initialLength === 4) {
                    result.push(`${el1}${el2}${el3}${el4}`)
                } 
            });
        });
    });
});
return result;
}


//console.log(getCode('1'));

