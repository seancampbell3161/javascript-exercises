const leapYears = function(year) {

    let isLeapYear = false;

    if(year % 4 === 0) {
        if(year % 100 === 0) {
            if(year % 400 === 0) {
                isLeapYear = true;
            }
        } else {
            isLeapYear = true;
        }
    }

    return isLeapYear;

};

module.exports = leapYears;


// year % 4 == 0
// year cannot be divisible by 100
// unless they are divisible by 400
