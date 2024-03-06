const foo = [1, 12, 16, 28, 34];
const bar = [1, 13, 16, 27, 99];
const merge = [];
const fooLength = foo.length;
const barLength = bar.length;
let fooPosition = 0;
let barPosition = 0;
let mergerPosition = 0;

while (fooPosition < fooLength && barPosition < barLength) {
    const fooValue = foo[fooPosition];
    const barValue = bar[barPosition];
    if (fooValue <= barValue) {
        merge[mergerPosition] = fooValue;
        mergerPosition++;
        fooPosition++;
    } else {
        merge[mergerPosition] = barValue;
        mergerPosition++;
        barPosition++;
    }
}
while (fooPosition < fooLength) {
    merge[mergerPosition++] = foo[fooPosition++]
}
while (barPosition < barLength) {
    merge[mergerPosition++] = bar[barPosition++]
}
console.log(merge)
