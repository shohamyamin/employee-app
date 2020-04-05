import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
/**
 * make a login request to the server
 */
export class AuthService {
  apiURL = 'http://localhost:3000';
  isAuthenticated = false;
  constructor(private http: HttpClient) {}

  login(user: User) {
    return this.http.post(`${this.apiURL}/login`, user).pipe(
      tap((response) => {
        this.isAuthenticated = true;
      })
    );
  }
}
