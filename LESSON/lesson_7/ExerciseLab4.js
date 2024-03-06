const readline = require('readline-sync')

let bankAccountMain = {
    accountNumber: "123",
    routingNumber: "6868",
    balance: 888888
};

let bankAccount2nd = JSON.parse(JSON.stringify(bankAccountMain));
bankAccount2nd.balance = 99999999999999;
bankAccount2nd.accountNumber = "456";

let bankAccounts = [bankAccountMain, bankAccount2nd];
mybankApp();
function mybankApp() {
    //printGameMenu()
    const userOption = Number(readline.question('Please select an option: '))
    switch (userOption) {
        case 1:
            const account = findAccount();
            _logAccountInfo(account);
           
            break;
        case 2:
            withDrawMoney()
            break;
        case 0:
            
            break;
        default:
            break;
    }
}
function findAccount() {
    const accountNumber = _getAccountNumber() ;
   
    return bankAccounts.find(function (eachAccount){
        if (eachAccount.accountNumber == accountNumber) {
            return eachAccount
        }
    });
}
function withDrawMoney() {
const account = findAccount();
_logAccountInfo(account)
const amountWithDraw = Number(readline.question('Please input in amount'));
const currentBalance = account.balance;
if(currentBalance < amountWithDraw) {
    console.log('Insufficient balance!!!');
    return;
}
account.balance = currentBalance - amountWithDraw;
_logAccountInfo(account)

}

function _getAccountNumber() {
    return readline.question('Please input account number')
}
function _logAccountInfo(account) {
    if(account) {
        console.log("your account is " ,account);
    } else {
        console.log("there is no account with provied info");
    }
}