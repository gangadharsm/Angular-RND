import { IEmployee } from '../interface/IEmployee';
import { EmployeeName } from './Employee-name';
import { IEmployeeName } from '../interface/IEmployee-name';

export class Employee implements IEmployee {

  public employeeName: IEmployeeName;

  constructor() {
    this.employeeName =  new EmployeeName();
  }

  addEmployeeName(firstName: string, lastName: string): void {

    this.employeeName.firstName = firstName.trim();
    this.employeeName.lastName = lastName.trim();
    this.employeeName.fullName = `${firstName} ${lastName}`;
  }
}
