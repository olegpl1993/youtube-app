import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import AuthService from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export default class AuthComponent {
  public loginForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordValidator()]],
    });
  }

  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value: string = control.value || '';
      const hasMinLength = value.length >= 8;
      const hasUppercase = /[A-Z]/.test(value);
      const hasLowercase = /[a-z]/.test(value);
      const hasMixedCase = hasUppercase && hasLowercase;
      const hasLettersAndNumbers = /[a-zA-Z]/.test(value) && /\d/.test(value);
      const hasSpecialCharacter = /[!@#?]/.test(value);

      const isValid =
        hasMinLength &&
        hasMixedCase &&
        hasLettersAndNumbers &&
        hasSpecialCharacter;

      return isValid
        ? null
        : {
            passwordInvalid: true,
            hasMinLength,
            hasMixedCase,
            hasLettersAndNumbers,
            hasSpecialCharacter,
          };
    };
  }

  onSubmit() {
    this.authService.updateLogin(this.loginForm.value.login.trim());
    this.authService.updatePassword(this.loginForm.value.password.trim());
    this.authService.handleLogin();
  }
}
