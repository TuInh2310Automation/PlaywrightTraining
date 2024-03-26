export default abstract class Account {
    protected minimuBalance: number;
    protected currentBalace: number;
    protected availbleBalance: number;

    constructor(initAmount: number,minimumBalance: number) {
        this.currentBalace = initAmount;
        this.minimuBalance = minimumBalance;
        this.availbleBalance = 0;
    }

    deposit(amount: number): void {
        this.currentBalace += amount;
        this.updateAvailable()
    }
    
    getBalance(): number {
        return this.currentBalace;
    }
    updateAvailable(): void {
        this.availbleBalance =  this.currentBalace - this.minimuBalance;
        console.log(`availbleBalance is ` + this.availbleBalance);
        
    }

  
    abstract withdraw(amount: number): void;
}