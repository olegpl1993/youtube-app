import { Component, ElementRef, ViewChild } from '@angular/core';
import AuthService from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export default class AuthComponent {
  constructor(private authService: AuthService) {}

  public loginValue = '';
  public passwordValue = '';

  @ViewChild('authForm') authForm!: ElementRef;

  submitForm(event: Event) {
    event.preventDefault();
    this.authService.updateLogin(this.loginValue.trim());
    this.authService.updatePassword(this.passwordValue.trim());
    this.authService.handleLogin();
    this.authForm.nativeElement.reset();
  }
}
