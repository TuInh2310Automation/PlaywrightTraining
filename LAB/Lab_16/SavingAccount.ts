import Account from "./Account";

export default class SavingAccount extends Account {
    constructor(initialAmount: number) {
        super(initialAmount, 300);
    }
   
    withdraw(amount: number): void {
        if (amount > this.availbleBalance) {  
            throw new Error(`With draw amount ${amount} bigger than availbleBalance `)  
        } else {
            this.currentBalace -= amount;
            this.updateAvailable()
        }
    }
}