import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  constructor(private router: Router) {}

  private loginSource = new BehaviorSubject<string>('');
  login$ = this.loginSource.asObservable();
  updateLogin(value: string) {
    this.loginSource.next(value);
  }

  private passwordSource = new BehaviorSubject<string>('');
  password$ = this.passwordSource.asObservable();
  updatePassword(value: string) {
    this.passwordSource.next(value);
  }

  isLoggedIn() {
    return !!localStorage.getItem('authToken');
  }

  handleLogin() {
    const token = `${this.loginSource.getValue()}&${this.passwordSource.getValue()}`;
    localStorage.setItem('authToken', token);
    this.loginSource.next('');
    this.passwordSource.next('');
    this.router.navigate(['/']);
  }

  handleLogout() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/auth']);
  }
}
