function sortArrByLogic(inputArr) {
    for (let i = 0; i < inputArr.length; i++) {
        for (let j = i + 1; j < inputArr.length; j++) {
            let tmp = 0;
            if (inputArr[i] > inputArr[j]) {
                tmp = inputArr[i];
                inputArr[i] = inputArr[j];
                inputArr[j] = tmp;
            }
        }
    }
}
module.exports = {
    sortArrByLogic: sortArrByLogic
}