const removeFromArray = function(array, ...toRemove) {

    let modifiedArray = array.slice();

    for(let i = 0; i < array.length; i++) {
        if(modifiedArray.includes(toRemove[i])) {
            modifiedArray.splice(modifiedArray.indexOf(toRemove[i]), 1);
        }
    }

    return modifiedArray;
};

module.exports = removeFromArray;
