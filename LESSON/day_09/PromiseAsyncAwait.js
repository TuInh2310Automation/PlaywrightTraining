function asyncFunction01(param1) {
    console.log('Processing ' + param1);
    return new Promise(function(resolve, reject) {
        setTimeout(function()  {
            const returnedValue = 'asyncFunction01 '+ param1;
            resolve(returnedValue);
        }, 1000);
    })
    
   
}
function asyncFunction02(param2) {
    console.log('Processing ' + param2);
    return new Promise(function(resolve, reject) {
        setTimeout(function()  {
            const returnedValue = 'asyncFunction02 '+ param2;
            resolve(returnedValue);
        }, 1000);
    })
}
function asyncFunction03(param3) {
    console.log('Processing ' + param3);
    return new Promise(function(resolve, reject) {
        setTimeout(function()  {
            const returnedValue = 'asyncFunction03 '+ param3;
            resolve(returnedValue);
        }, 1000);
    })
}



/*
Asynchronous -> vi du ve uong cafe
Asynchronous -> callback -> callback hell problem
Asynchronous -> Promise -> thenable
Asynchronous -> Promise -> async/await -> clean syntax + easy to maintain
*/
async function run() {
    const returnedValue1 = await asyncFunction01('param1');
    const returnedValue2 = await asyncFunction02(returnedValue1);
    const finalValue = await asyncFunction02(returnedValue1);
    console.log(finalValue);
}
run();