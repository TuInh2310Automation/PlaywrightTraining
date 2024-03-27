import BankAccount from "./BankAccount";
import SavingAccount from "./SavingAccount";

const savingAccount = new SavingAccount();
console.log(`Befor depsiting: ${savingAccount.getBalance()}`);
savingAccount.deposit(1000)
console.log(`after depsiting: ${savingAccount.getBalance()}`);
savingAccount.withdraw(500);
console.log(`after withdraw: ${savingAccount.getBalance()}`);
savingAccount.withdraw(1);
console.log(`after withdraw: ${savingAccount.getBalance()}`);

