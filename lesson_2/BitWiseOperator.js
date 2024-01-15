function getFirstNumber() {
    console.log("calling method 1")
    return 0;
}

function getSecondNumber() {
    console.log("calling method 2")
    return 2;
}

if (getFirstNumber() !== 0 && getSecondNumber() !== 0) {
    console.log("the evaluation was true...")
}
// 1 & : check cả 2 toán tử
//2 && : chỉ check toán tử đầu, nếu toán tử đầu sai, thì ko check toán tử 2 nữa