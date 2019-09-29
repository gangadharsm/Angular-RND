import { Component } from '@angular/core';
import { Employee } from './core/class/Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Employee Details App';
  employeeInfo: Employee;
  constructor() {
    this.employeeInfo = new Employee();
    this.employeeInfo.AddEmployeeName('Gangadhara', 'Sirigeri Mathda');
  }
}
