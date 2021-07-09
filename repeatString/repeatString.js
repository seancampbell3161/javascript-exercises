const repeatString = function(word, numOfRepeats) {

    if(numOfRepeats < 0) return "ERROR";
    result = "";
    for(let i = 0; i < numOfRepeats; i++) {
        result += word;
    }
    return result;
};

module.exports = repeatString;
