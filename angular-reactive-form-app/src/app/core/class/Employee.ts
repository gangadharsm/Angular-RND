import { IEmployee } from '../interface/IEmployee';
import { EmployeeName } from './Employee-name';

export class Employee implements IEmployee {

  public employeeName: EmployeeName;

  constructor() {
    this.employeeName = null;
  }

  public AddEmployeeName(firstName: string, lastName: string): void {
    this.employeeName = new EmployeeName();
    this.employeeName.firstName = firstName.trim();
    this.employeeName.lastName = lastName.trim();
    this.employeeName.fullName = `${firstName} ${lastName}`;
  }
}
