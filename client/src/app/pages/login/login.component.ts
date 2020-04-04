import { Component, OnInit } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { NEVER } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  errorMessege = '';
  ngOnInit(): void {}

  login() {
    console.log(
      'login was pressed' +
        'user: ' +
        this.user.username +
        ' password: ' +
        this.user.password
    );
    if (this.user.username === '' || this.user.password === '') {
      this.errorMessege = 'The fields are required';
    } else {
      this.authService
        .login(this.user)
        .pipe(
          tap(response => {
            // redirect to home screen;

            this.router.navigateByUrl('/home');
            console.log('navigate to home');
          }),
          catchError(err => {
            // show error
            this.errorMessege = 'UserName/Password incorrect';
            return NEVER;
          })
        )
        .subscribe();
    }
  }
}
