import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  constructor(private router: Router) {}

  private login = new BehaviorSubject<string>('');
  login$ = this.login.asObservable();
  updateLogin(value: string) {
    this.login.next(value);
  }

  private password = new BehaviorSubject<string>('');
  password$ = this.password.asObservable();
  updatePassword(value: string) {
    this.password.next(value);
  }

  handleLogin() {
    const token = `${this.login.getValue()}&${this.password.getValue()}`;
    localStorage.setItem('authToken', token);
    this.login.next('');
    this.password.next('');
    this.router.navigate(['/']);
    console.log('authToken = ', localStorage.getItem('authToken'));
  }

  handleLogout() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/auth']);
    console.log('authToken = ', localStorage.getItem('authToken'));
  }
}
