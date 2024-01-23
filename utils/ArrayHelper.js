function filterGreater3Number(value, index, array) {
    console.log("Processing at index", index);
    return value > 3;
}

function convertToEvenNumbers(value, index, array) {
    if (value % 2 === 1) {
        return value * 2;
    } else {
        return value;
    }

}
function sortNumberASC(firstNum, secondNum) {
    return firstNum - secondNum;
}

function sortNumberDESC(firstNum, secondNum) {
    return secondNum - firstNum;
}

module.exports = {
    sortNumberASC: sortNumberASC,
    sortNumberDESC: sortNumberDESC ,
    convertToEvenNumbers: convertToEvenNumbers,
    filterGreater3Number: filterGreater3Number
}