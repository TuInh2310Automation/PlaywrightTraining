class MethodOverloading {
    // js rest parameters
    static add (...nums) {
        return nums;
    }

    static divide(a, b) {
        if (arguments.length !=2) {
            throw new Error("Must provide 2 numbers")
        }
        if (b===0) {
            throw new Error("Can divide zero")
        }
        return a/b
    }
}
const addResult = MethodOverloading.divide(1,2)
console.log(addResult);
module.exports = MethodOverloading;
