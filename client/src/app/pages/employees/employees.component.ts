import { Component, OnInit, Input, ViewChild, OnChanges } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeesService } from 'src/app/services/employees.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit, OnChanges {
  @Input() employees: Employee[];
  @Input() searchValue;
  displayedColumns: string[] = ['id', 'name', 'email', 'role'];
  employeeById: Observable<Employee>;
  dataSource = new MatTableDataSource<Employee>(this.employees);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private employeesService: EmployeesService,
    private router: Router
  ) {}

  ngOnChanges() {
    this.dataSource = new MatTableDataSource<Employee>(this.employees);
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  dispalyEmployeeDetails(employee: Employee) {
    this.router.navigateByUrl(`/employees/${employee.id}`);
  }
}
