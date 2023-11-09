import { Component, ElementRef, ViewChild } from '@angular/core';
import AuthService from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export default class AuthComponent {
  constructor(private authService: AuthService) {}

  @ViewChild('authForm') authForm!: ElementRef;

  handleSubmit(event: Event) {
    event.preventDefault();
    this.authService.handleLogin();
    this.authForm.nativeElement.reset();
  }

  handleLoginInput(event: Event) {
    if (event.target instanceof HTMLInputElement) {
      this.authService.updateLogin(event.target.value.trim());
    }
  }

  handlePasswordInput(event: Event) {
    if (event.target instanceof HTMLInputElement) {
      this.authService.updatePassword(event.target.value.trim());
    }
  }
}
