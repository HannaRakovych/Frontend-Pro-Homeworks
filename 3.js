function getAdder() { 
    let result = 0; 

    return function(x) { 
        result += x; 
        return result; 
    } 
};

let sum = getAdder();

// sum(1) - 1
// sum(3) - 4