/*
let teo = {
    name: "Teo",
    myAge: 18
};
*/
/*
let ti = teo;
ti.name = "ti";
ti.myAge = 19;
console.log(teo);
console.log(ti);
*/
/*
let array = [teo, teo];
array[1].name = 'ti';

console.log(array)
*/
let teo = {
    name: "Teo",
    myAge: 18,
    bankAccount: {
        accountNum: "11223344",
        balance: 100000
    }
};
//shallow copy - spread syntax - one level
/*
let ti = { ...teo };
ti.name = 'ti';
ti.bankAccount.balance = 1;

console.log(teo)
console.log(ti)
*/
//shallow copy - handle for nested object, array, (not for function, circular reference)
/*let ti = JSON.parse(JSON.stringify(teo));
ti.name = 'ti';
ti.bankAccount.balance = 1;

console.log(teo)
console.log(ti)
*/
    // Object.keys(target Object)
console.log(Object.keys(teo));
console.log(Object.values(teo));
console.log(Object.entries(teo));