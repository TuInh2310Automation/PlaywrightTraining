import CheckingAccount from "./CheckingAccount";
import SavingAccount from "./SavingAccount";

const checkingAccount = new CheckingAccount(15000);
const savingsAccount = new SavingAccount(3000);
/*
console.log(`initial Checking Account ${checkingAccount.getBalance()} `);
checkingAccount.deposit(300);
console.log(`After deposit Checking Account ${checkingAccount.getBalance()} `);
checkingAccount.withdraw(12000);
console.log(checkingAccount.getBalance());
*/

savingsAccount.deposit(100);
console.log(savingsAccount.getBalance());
savingsAccount.withdraw(900);
console.log(savingsAccount.getBalance());