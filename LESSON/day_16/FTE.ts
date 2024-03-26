import Employee from "./Employee";

export default class FTE extends Employee {
    constructor(name: string) {
        super(name);
        this.salary = 5000;
    }

    getSalary(): number {
        return 5000;
    }
    getSupportSalary() : number {
        return 150;
    }
}