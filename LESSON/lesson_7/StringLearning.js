let myString = ' ghjf\'67890\'';
console.log(myString);
// Length
const myStrLength = myString.length;
console.log(myString.length);

for (let index = 0; index < myString.length; index++) {
    console.log(typeof myString.charAt(index))
}
//get rid of spaces at start and the end
console.log(myString.trim().length);

//Replace
// Em phai hi sinh => remove m
let toBeReplaceString = "tmomi mnmay gMap mnmhamu 7h de vao day"
// /g - global, /i insensitive


//console.log(toBeReplaceString.replace(/m/gi, ""));
console.log(toBeReplaceString.replaceAll("m", ""));

//200 mins
let containNumStr = "200mins";
let num = containNumStr.replace(/[^0-9]/gi, "");
console.log(num);

console.log(`typeof num:${typeof num}`);

//back stick | String template 
let anotherVar = "56789-"
console.log(`typeof num:${checkTypeOf(anotherVar)} ${anotherVar}`);
console.log(Number(num) + 1)
function checkTypeOf(sth) {
    return typeof sth;
}


// concatenation / concat
console.log("hello ".concat(" tui ten teo !" + ", how are you"))

//Subsstring
let strToBeCut = 'https://sdetpro.com';
//exclusive

console.log(getDomainName(strToBeCut))
function getDomainName(url) {
    let domain;
    const indicator = "://";
    // logic go here
    const indexOfIndicator = url.indexOf(":/");
    if (indexOfIndicator < 0) {
        const errMsg = `invalid url ${url} `;
        throw Error(errMsg);
    }
    const domainStartIndex = indexOfIndicator + indicator.length;
    return url.substring(domainStartIndex).replace(/\//gi,"");
}
