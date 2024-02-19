
/*function askQUestion(question) {
    console.log(this.name);
    console.log(question);
}
console.log('1. Toi nha thang teo');
const question = '2. teo oi, uong cafe ko'
setTimeout(askQUestion.bind({name: 'teo teo'}, question), 1000);
console.log('3 Chay toi quan cafe');
*/
function askQUestion() {
    console.log('2 teo oi,uong cafe ko?');
}
console.log('1. Toi nha thang teo');

setTimeout(askQUestion, 1000);
console.log('3 Chay toi quan cafe');