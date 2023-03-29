const sumAll = function(a, b) {

    if (a < 0 || b < 0 || isNaN(a) || isNaN(b) || typeof a === 'string' || typeof b === 'string'){
        return "ERROR";
    }
    let n = Math.abs(b - a);
    let m = a;
    if (a > b) {m = b};
    return m * (n+1) + (n)*(n+1)*0.5;
};

// Do not edit below this line
module.exports = sumAll;
