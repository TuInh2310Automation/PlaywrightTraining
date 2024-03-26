import Employee from "./Employee";

export default class Contractor extends Employee{
    constructor(name: string) {
        super(name, 4000);
       
    }
}