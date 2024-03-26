import Employee from "./Employee";

export default class Contractor extends Employee{
    constructor(name: string) {
        super(name);
        this.salary = 4000;
       
    }
    getSalary(): number {
        return this.salary ;
    }
    getSupportSalary() : number {
        return this.supportSalary;
    }

}