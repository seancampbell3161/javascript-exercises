const sumAll = function(begin, end) {

    if(begin > end) {
        let placeholderBegin = begin;
        let placeholderEnd = end;
        begin = placeholderEnd;
        end = placeholderBegin;
    }

    if(begin < 0 || end < 0) return "ERROR";

    if(typeof begin != "number" || typeof end != "number") return "ERROR";

    let sum = 0;

    for(let i = begin; i <= end; i++) {
        sum += i;
    }

    return sum;

};

module.exports = sumAll;
