import Employee from "./Employee";

export default class EmployeeController {
    static getTotalSalary(employeelist: Employee[]) : number {
        let totalSalary = 0;
        employeelist.forEach(employee => {
            totalSalary += employee.getSalary();
        });
        return totalSalary;
    }
}