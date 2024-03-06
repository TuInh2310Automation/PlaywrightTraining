const readline = require('readline-sync')

let bankAccountMain = {
    accountNumber: "0351000836916",
    routingNumber: "6868",
    balance: 888888
};

let bankAccount2nd = JSON.parse(JSON.stringify(bankAccountMain));
bankAccount2nd.balance = 99999999999999;
bankAccount2nd.accountNumber = "68686868";
console.log(bankAccount2nd);
let bankAccounts = [bankAccountMain, bankAccount2nd];

let isUsingBakingApp = true;
while (isUsingBakingApp) {
    printGameMenu()
    let userInput = getUserOption("Please select an option: ");
    switch (Number(userInput)) {
        case 0:
            exitGame();
            break;
        case 1:
            // Find an account
            let accNum = getUserOption("Please enter account you look at: ");
            findAnAccount(accNum)
            break;
        case 2:
            //Withdraw money
            let withDrawNumber = getUserOption("Please enter money you wanna withdraw: ");
            updateBalance(withDrawNumber)
            break;
        default:
            break;
    }
    
}
function findAnAccount(accountNumber) {
    let isExisting = false;
    for (const bankAccount of bankAccounts) {
        if(bankAccount.accountNumber ==  accountNumber) {
            console.log(`Existing account: ${bankAccount.accountNumber} with balance: ${bankAccount.balance}`);
            isExisting= true;
        }
    }
    if (!isExisting) {
        console.log(`Account number: ${accountNumber} not exist`);
    }
}

function updateBalance(money) {
    if (money <=0) {
        console.log('user do take negative or zero money');
    }else if(money > bankAccountMain.balance){
        console.log('user to take more than current balance');
    } else {
        bankAccountMain.balance = bankAccountMain.balance - money;
        console.log(`User withdraw ${money}. Balance remain is ${bankAccountMain.balance}`);
    }
}

function exitGame(){
    isUsingBakingApp = false;
}

function printGameMenu() {
    console.log("=====GAME MENU=====")
    console.log("1. Find an account")
    console.log("2. Update balance")
    console.log("0. Exit game")
}

function getUserOption(option) {
    return readline.question(option)
}