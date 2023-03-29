const repeatString = function(string, num) {
    if (num < 0){
        return "ERROR";
    }
    let g = '';
    for (let i = 0; i < num; i++){
        g += string;
    }
    return g;
};

// Do not edit below this line
module.exports = repeatString;
