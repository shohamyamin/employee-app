import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { EmployeeDetailsComponent } from './pages/employee-details/employee-details.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'employees', component: EmployeesComponent },
      { path: 'employees/:id', component: EmployeeDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
