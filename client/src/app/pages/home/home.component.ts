import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchValue: string;
  employees$: Observable<Employee[]>;
  constructor(private employeesService: EmployeesService) {
    this.searchValue = employeesService.lastSearch;
  }

  ngOnInit(): void {
    this.searchEmployees();
  }

  searchEmployees() {
    if (this.searchValue.length) {
      this.employees$ = this.employeesService.getEmployees(this.searchValue);
    }
  }
}
