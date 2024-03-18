class NumberHandler {
    static divide(firstNumber, secondNumber){
        return Math.round(firstNumber/secondNumber);
    }

    static isEvenNumber(number){
        return number % 2 == 0
    }
}
module.exports = NumberHandler