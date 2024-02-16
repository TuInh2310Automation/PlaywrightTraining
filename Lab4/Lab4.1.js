const readline = require('readline-sync')

let bankAccountMain = {
    accountNumber: "0351000836916",
    routingNumber: "6868",
    balance: 888888
};

let bankAccount2nd = JSON.parse(JSON.stringify(bankAccountMain));
bankAccount2nd.balance = 99999999999999;
console.log(bankAccountMain);
console.log(bankAccount2nd);
let bankAccounts = [bankAccountMain, bankAccount2nd];

let isUsingBakingApp = true;
while (isUsingBakingApp) {
    let userInput = getUserOption("Please select an option: ");
    switch (Number(userInput)) {
        case 0:
            isUsingBakingApp = false;
            break;
        case 1:
            // Find an account
            let accNum = getUserOption("Please enter account you look at: ");
            findAnAccount(accNum)
            break;
        case 2:
            let withDrawNumber = getUserOption("Please enter money you wanna withdraw: ");
            updateBalance(withDrawNumber)
            break;
        default:
            break;
    }
    
}
function findAnAccount(accountNumber) {
    for (const bankAccount of bankAccounts) {
        if(bankAccount.accountNumber ==  accountNumber) {
            console.log(`${bankAccount.accountNumber} has balance: ${bankAccount.balance}`);
        }
    }
}

function updateBalance(money) {
    if 
}


function getUserOption(option) {
    return readline.question(option)
}