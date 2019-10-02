import { IEmployeeName } from './IEmployee-name';

export interface IEmployee {
  employeeName: IEmployeeName;
  addEmployeeName(firstName: string, lastName: string);
}
