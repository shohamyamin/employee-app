import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
/**
 * get from the server emploees details
 */
export class EmployeesService {
  apiURL = 'http://localhost:3000';
  lastSearch = '';
  constructor(private http: HttpClient) {}

  getEmployees(input: string) {
    this.lastSearch = input;
    return this.http.get<Employee[]>(`${this.apiURL}/employees`, {
      params: { search: input },
    });
  }

  getEmployeeById(id: string) {
    return this.http.get<Employee>(`${this.apiURL}/employees/${id}`);
  }
}
