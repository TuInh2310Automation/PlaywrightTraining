import Employee from "./Employee";

export default class FTE implements Employee{
    name: string;
   salary: number ;
    supportSalary: number ;
    constructor(name: string) {
      this.supportSalary = 0;
      this.name = name;
       this.salary = 5000;
      
   }
   getSalary(): number {
       return this.salary ;
   }
   getSupportSalary() : number {
       return this.supportSalary;
   }

}