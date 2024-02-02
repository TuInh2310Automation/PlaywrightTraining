const { filterEvenNumbers,
    filterOddNumbers }
    = require('../utils/ArrayHelper')
//Second Approach / Delegation
let array = [1, 2, 3, 4, 5];
let totalEvenNum = array.filter(filterEvenNumbers).length;
let totalOddNum = array.filter(filterOddNumbers).length;
console.log('total even number: ', totalEvenNum);
console.log('total odd number: ', totalOddNum);