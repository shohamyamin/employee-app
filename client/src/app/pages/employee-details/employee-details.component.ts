import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { Observable, NEVER } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../models/employee.model';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employeeById$: Observable<Employee>;
  constructor(
    private employeesService: EmployeesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.employeeById$ = this.route.paramMap.pipe(
      switchMap(paramMap =>
        this.employeesService.getEmployeeById(paramMap.get('id'))
      )
    );
  }
}
