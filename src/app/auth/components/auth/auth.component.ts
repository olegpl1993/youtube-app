import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export default class AuthComponent {
  private login = '';
  private password = '';

  handleSubmit(event: Event) {
    event.preventDefault();
    console.log('submit');
  }

  handleLoginInput(event: Event) {
    if (event.target instanceof HTMLInputElement)
      this.login = event.target.value.trim();

    console.log(this.login);
  }

  handlePasswordInput(event: Event) {
    if (event.target instanceof HTMLInputElement)
      this.password = event.target.value.trim();

    console.log(this.password);
  }
}
