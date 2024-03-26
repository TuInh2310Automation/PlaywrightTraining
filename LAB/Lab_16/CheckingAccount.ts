import Account from "./Account";

export default class CheckingAccount extends Account {
    private overDraftLimit;
    constructor(initialAmount: number) {
        super(initialAmount, 0);
        this.overDraftLimit = 10000;
    }
    
    withdraw(amount: number): void {
        console.log('avalble balance' + this.availbleBalance);
        console.log('amount' + amount);
        if (amount > this.availbleBalance || amount > this.overDraftLimit) {
            console.log('vào 1');
            throw new Error(`With draw amount ${amount} shoulbe smaller than availbleBalance and overDraftLimit `)
        } else {
            console.log('vào 2');
            this.currentBalace -= amount;
            this.updateAvailable()
        }
    }
}