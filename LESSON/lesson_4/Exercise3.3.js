
let arr = [12, 34, 1, 16, 28];
let unsortedPosition = arr.length - 1;

while (unsortedPosition > 0) {
    for (let index = 0; index < unsortedPosition; index++) {
        const leftValue = arr[index];
        const rightValue = arr[index + 1];
        if (leftValue > rightValue) {
            arr[index] = rightValue;
            arr[index + 1] = leftValue;

        }
    }
    unsortedPosition--;
}
console.log(arr);