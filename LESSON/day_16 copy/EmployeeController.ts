import Contractor from "./Contractor";
import Employee from "./Employee";
import FTE from "./FTE";

export default class EmployeeController {
    static getTotalSalary(employeelist: Employee[]) : number {
        let totalSalary = 0;
        employeelist.forEach(employee => {
            if (employee instanceof FTE) {
                const fte = (<FTE> employee);
                totalSalary += fte.getSalary() + fte.getSupportSalary()             
            } else if (employee instanceof Contractor){
                const contractor = (<Contractor>employee)
                totalSalary += contractor.getSalary();
            }
           
        });
        return totalSalary;
    }
}