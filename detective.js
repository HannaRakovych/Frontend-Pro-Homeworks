function getNearbyNumbers(possibleNumber) {
    switch (possibleNumber) {
        case '1' :
            return ['1', '2', '4'];
        case '2' :
            return ['1', '2', '3', '5'];
        case '3' :
            return ['3', '2', '6'];
        case '4' :
            return ['1', '7', '4', '5'];
        case '5' :
            return ['2', '4', '6', '8', '5'];
        case '6' :
            return ['3', '5', '9', '6'];
        case '7' :
            return ['4', '7', '8'];
        case '8' :
            return ['5', '7', '8', '9', '0'];
        case '9' :
            return ['6', '8', '9'];
        case '0' :
            return ['0', '8'];
    }
}

function getCode(userCode) {

    const originalLength = userCode.length;
    
    switch (userCode.length) {
        case 1:
            userCode = '000' + userCode;
            break;
        case 2:
            userCode = '00' + userCode;
            break;
        case 3:
            userCode = '0' + userCode;
            break;
        default:
        break;
    }

const splitedCode = userCode.split('')

let resultArray1 = getNearbyNumbers(splitedCode[0])
let resultArray2 = getNearbyNumbers(splitedCode[1])
let resultArray3 = getNearbyNumbers(splitedCode[2])
let resultArray4 = getNearbyNumbers(splitedCode[3])

let result = [];

for(let i  = 0; i < resultArray1.length; i++) {
    if (originalLength === 1) {
        let possibleCode = `${resultArray1[i]}`
        result.push(possibleCode)
    }
    for(let j  = 0; j < resultArray2.length; j++) {
        if (originalLength === 2) {
            let possibleCode = `${resultArray1[i]}${resultArray2[j]}`
            result.push(possibleCode)
        
        for(let m  = 0; m < resultArray3.length; m++) {
            if (originalLength === 3) {
                let possibleCode = `${resultArray1[i]}${resultArray2[j]}${resultArray3[m]}`
                result.push(possibleCode)
            }
            for(let k  = 0; k < resultArray4.length; k++) {
                if (originalLength === 4) {
                    let possibleCode = `${resultArray1[i]}${resultArray2[j]}${resultArray3[m]}${resultArray4[k]}`
                    result.push(possibleCode)
                }
            }
        }
    }
} return result
}
}

//console.log(getCode('1'));